package com.viniciusvieira.server.domain.exception;

import java.io.Serial;

public class BusinessRuleException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 8386515803956008120L;

    public BusinessRuleException() {
        super();
    }

    public BusinessRuleException(String message) {
        super(message);
    }
}
