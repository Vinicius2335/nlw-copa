package com.viniciusvieira.server.domain.exception;

import java.io.Serial;

public class UserAlreadyParticipantException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 6281250264794985565L;

    public UserAlreadyParticipantException() {
        super();
    }

    public UserAlreadyParticipantException(String message) {
        super(message);
    }
}
