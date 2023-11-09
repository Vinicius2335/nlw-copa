package com.viniciusvieira.server.domain.exception;

import java.io.Serial;

public class PollNotFoundException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 8386515803956008120L;

    public PollNotFoundException() {
        super();
    }

    public PollNotFoundException(String message) {
        super(message);
    }
}
