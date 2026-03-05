package com.example.demo.controller;

import com.example.demo.model.LoginRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        user.setRole("USER");
        return userService.registerUser(user);
    }


@PostMapping("/login")
public User login(@RequestBody LoginRequest request) {
    return userService.loginUser(request.getEmail(), request.getPassword());
}
}