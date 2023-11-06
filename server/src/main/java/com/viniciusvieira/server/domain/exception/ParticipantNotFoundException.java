package com.viniciusvieira.server.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ParticipantNotFoundException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 8386515803956008120L;

    public ParticipantNotFoundException() {
        super();
    }

    public ParticipantNotFoundException(String message) {
        super(message);
    }
}