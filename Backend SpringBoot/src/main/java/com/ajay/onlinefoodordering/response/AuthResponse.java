package com.ajay.onlinefoodordering.response;

import com.ajay.onlinefoodordering.model.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {

    private String jwt;

    private String massage;

    private USER_ROLE role;
}
