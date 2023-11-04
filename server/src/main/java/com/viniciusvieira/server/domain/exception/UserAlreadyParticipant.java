package com.viniciusvieira.server.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserAlreadyParticipant extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 6281250264794985565L;

    public UserAlreadyParticipant() {
        super();
    }

    public UserAlreadyParticipant(String message) {
        super(message);
    }
}
