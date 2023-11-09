package com.viniciusvieira.server.domain.exception;

import java.io.Serial;

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
