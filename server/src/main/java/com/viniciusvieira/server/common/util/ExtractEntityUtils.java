package com.viniciusvieira.server.common.util;

import com.viniciusvieira.server.domain.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public abstract class ExtractEntityUtils {
    public static User extractEntityFromContex(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null){
            return (User) authentication.getPrincipal();
        } else {
            return null;
        }

    }
}
