package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.config.JwtProvider;
import com.ajay.onlinefoodordering.model.User;
import com.ajay.onlinefoodordering.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
    String email = jwtProvider.getEmailFormJwtToken(jwt);
    User user = findUserByEmail(email);
    return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new Exception("User not found");
        }
        return user;
    }
}
