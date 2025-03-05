package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.User;

public interface UserService {

    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;

}
