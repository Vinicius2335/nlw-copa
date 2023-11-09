package com.viniciusvieira.server.domain.exception;

import java.io.Serial;

public class GameNotFoundException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 8386515803956008120L;

    public GameNotFoundException() {
        super();
    }

    public GameNotFoundException(String message) {
        super(message);
    }
}
