package com.viniciusvieira.server.api.exception.handler;

import com.viniciusvieira.server.domain.exception.*;
import lombok.NonNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    private Problem createExceptionResponseBody(RuntimeException ex, Integer status){
        Problem problem = new Problem();
        problem.setTimestamp(OffsetDateTime.now());
        problem.setStatus(status);
        problem.setTitle(ex.getMessage());

        return problem;
    }

    @Override
    public ResponseEntity<Object> handleMethodArgumentNotValid(
            @NonNull MethodArgumentNotValidException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatusCode status,
            @NonNull WebRequest request
    ) {
        List<Problem.Field> fields = new ArrayList<>();

        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();
        fieldErrors.forEach(fieldError -> fields.add(
                new Problem.Field(fieldError.getField(), fieldError.getDefaultMessage())
        ));

        Problem problem = new Problem();
        problem.setTimestamp(OffsetDateTime.now());
        problem.setStatus(status.value());
        problem.setTitle("One or more fields are invalid. Fill it out correctly and try again.");

        problem.setFields(fields);

        return handleExceptionInternal(ex, problem, headers, status, request);
    }

    @ExceptionHandler(BusinessRuleException.class)
    public ResponseEntity<Object> handleBusinessRuleException(
            BusinessRuleException ex,
            WebRequest request
    ){
        HttpStatus status = HttpStatus.BAD_REQUEST;
        Problem body = createExceptionResponseBody(ex, status.value());

        return handleExceptionInternal(ex, body, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(GameNotFoundException.class)
    public ResponseEntity<Object> handleGameNotFoundException(
            GameNotFoundException ex,
            WebRequest request
    ){
        HttpStatus status = HttpStatus.NOT_FOUND;
        Problem body = createExceptionResponseBody(ex, status.value());

        return handleExceptionInternal(ex, body, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(ParticipantNotFoundException.class)
    public ResponseEntity<Object> handleParticipantNotFoundException(
            ParticipantNotFoundException ex,
            WebRequest request
    ){
        HttpStatus status = HttpStatus.NOT_FOUND;
        Problem body = createExceptionResponseBody(ex, status.value());

        return handleExceptionInternal(ex, body, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(PollNotFoundException.class)
    public ResponseEntity<Object> handlePollNotFoundException(
            PollNotFoundException ex,
            WebRequest request
    ){
        HttpStatus status = HttpStatus.NOT_FOUND;
        Problem body = createExceptionResponseBody(ex, status.value());

        return handleExceptionInternal(ex, body, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(TokenException.class)
    public ResponseEntity<Object> handleTokenException(
            TokenException ex,
            WebRequest request
    ){
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        Problem body = createExceptionResponseBody(ex, status.value());

        return handleExceptionInternal(ex, body, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(UserAlreadyParticipantException.class)
    public ResponseEntity<Object> handleUserAlreadyParticipantException(
            UserAlreadyParticipantException ex,
            WebRequest request
    ){
        HttpStatus status = HttpStatus.BAD_REQUEST;
        Problem body = createExceptionResponseBody(ex, status.value());

        return handleExceptionInternal(ex, body, new HttpHeaders(), status, request);
    }
}
