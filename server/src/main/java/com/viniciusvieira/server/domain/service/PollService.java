package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.PollMapper;
import com.viniciusvieira.server.api.representation.model.request.CreatePollRequest;
import com.viniciusvieira.server.api.representation.model.request.EnterPollRequest;
import com.viniciusvieira.server.api.representation.model.response.AvatarParticipantResponse;
import com.viniciusvieira.server.api.representation.model.response.CustomPollResponse;
import com.viniciusvieira.server.api.representation.model.response.ParticipantUserResponse;
import com.viniciusvieira.server.api.representation.model.response.PollResponse;
import com.viniciusvieira.server.common.util.ExtractEntityUtils;
import com.viniciusvieira.server.domain.exception.PollNotFoundException;
import com.viniciusvieira.server.domain.exception.UserAlreadyParticipantException;
import com.viniciusvieira.server.domain.model.Participant;
import com.viniciusvieira.server.domain.model.Poll;
import com.viniciusvieira.server.domain.model.User;
import com.viniciusvieira.server.domain.repository.PollRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class PollService {
    private final PollRepository pollRepository;
    private final PollMapper pollMapper;
    private final ParticipantService participantService;

    public long countPolls() {
        return pollRepository.count();
    }

    /**
     * Se usuário estiver logado automaticamente se torna o owner/proprietário e um participante do bolão criado,
     * se não, apenas cria um bolão.
     *
     * @param createPollRequest objeto que possui os campos necessários para criar um bolão válido.
     * @return o código do bolão criado.
     */
    @Transactional
    public Map<String, Object> createPoll(CreatePollRequest createPollRequest) {
        User user = ExtractEntityUtils.extractEntityFromContex();
        Map<String, Object> response = new HashMap<>();
        Poll pollToSaved = pollMapper.toPoll(createPollRequest);
        Poll savedPoll;

        if (user != null) {
            pollToSaved.setOwner(user);
            savedPoll = savePoll(pollToSaved);
            participantService.createParticipant(user, savedPoll);
            response.put("code", savedPoll.getCode());
            return response;
        }

        savedPoll = savePoll(pollToSaved);
        response.put("code", savedPoll.getCode());
        return response;
    }

    @Transactional
    private Poll savePoll(Poll pollToSaved) {
        pollToSaved.setCode(createCode());
        return pollRepository.saveAndFlush(pollToSaved);
    }

    private String createCode() {
        return RandomStringUtils.randomAlphanumeric(6).toUpperCase();
    }

    /**
     * Cria um novo participante para um bolão.
     * @param request corpo da requisição com o código do bolão.
     */
    @Transactional
    public void joinInPoll(EnterPollRequest request) {
        // verifica se o código está relacionado com algum bolão
        Poll poll = findByCodeOrThrows(request.getCode());

        User user = ExtractEntityUtils.extractEntityFromContex();

        // TODO: Gambiarra pq o front não tem login (remover depois)
        // se  o bolão nao tiver owner/proprietário, o primeiro que entrar é o dono.
        if (poll.getOwner() == null) {
            poll.setOwner(user);
            pollRepository.saveAndFlush(poll);
        }

        // verifica se o usuário logádo já está participando desse bolão
        boolean userAlreadyParticipantInThePoll = participantService.isUserAlreadyParticipantInThePoll(
                user.getId(),
                poll.getId()
        );

        if (userAlreadyParticipantInThePoll) {
            throw new UserAlreadyParticipantException("You already joined this poll");
        }

        // Se deu tudo certo, cria/insere o novo participante
        participantService.createParticipant(user, poll);
    }

    public Poll findByCodeOrThrows(String code) throws PollNotFoundException {
        return pollRepository.findByCode(code)
                .orElseThrow(
                        () -> new PollNotFoundException("Poll not found...")
                );
    }

    /**
     * Busca todos os bolões que o usuário está participando
     * @return lista de bolões
     */
    public List<CustomPollResponse> getPollsResponse() {
        List<CustomPollResponse> response = new ArrayList<>();
        User user = ExtractEntityUtils.extractEntityFromContex();

        // logica para extrair todos os boloes que o usuário está participando
        List<Participant> allParticipantingList = participantService.findAllParticipantsByIdUser(user.getId());
        List<Poll> pollList = allParticipantingList.stream()
                .map(Participant::getPoll)
                .toList();

        // lógica para customizar o response com o bolão,
        // o número de participantes por bolao
        // os 4 primeiros avatares dos participantes
        pollList.forEach(poll -> {
            List<Participant> participantsByIdPoll = participantService.findAllParticipantsByIdPoll(poll.getId());
            int count = participantsByIdPoll.size();

            List<AvatarParticipantResponse> participants = participantsByIdPoll.stream()
                    .map(participant -> new AvatarParticipantResponse(participant.getUser().getAvatarUrl()))
                    .limit(4)
                    .toList();

            PollResponse pollResponse = pollMapper.toPollResponse(poll);
            CustomPollResponse customPollResponse = CustomPollResponse.builder()
                    .poll(pollResponse)
                    .count(count)
                    .participants(participants)
                    .build();
            response.add(customPollResponse);
        });

        return response;
    }
    // getPollById  findByIdOrThorws
    public CustomPollResponse getPollResponseById(UUID idPoll){
        Poll poll = findPollsByIdOrThorws(idPoll);

        List<Participant> participantsByIdPoll = participantService.findAllParticipantsByIdPoll(idPoll);
        int count = participantsByIdPoll.size();

        List<ParticipantUserResponse> participantsResponse = participantService.converterToParticipantUserResponseList(participantsByIdPoll);

        return CustomPollResponse.builder()
                .poll(pollMapper.toPollResponse(poll))
                .participants(participantsResponse)
                .count(count)
                .build();
    }

    public Poll findPollsByIdOrThorws(UUID idPoll) throws PollNotFoundException {
        return pollRepository.findById(idPoll)
                .orElseThrow(() -> new PollNotFoundException("Poll not found..."));
    }

}
