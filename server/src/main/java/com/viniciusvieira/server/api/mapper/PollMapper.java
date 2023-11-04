package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.request.CreatePollRequest;
import com.viniciusvieira.server.api.representation.model.response.PollResponse;
import com.viniciusvieira.server.domain.model.Poll;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class PollMapper {
    private final ModelMapper modelMapper;

    public Poll toPoll(CreatePollRequest createPollRequest){
        return modelMapper.map(createPollRequest, Poll.class);
    }

    public PollResponse toPollResponse(Poll poll){
        return modelMapper.map(poll, PollResponse.class);
    }

    public List<PollResponse> toListPollResponse(List<Poll> polls){
        return polls.stream()
                .map(this::toPollResponse)
                .toList();
    }
}
