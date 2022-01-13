package it.akademija.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.backend.dto.UserRequest;
import it.akademija.backend.dto.UserResponse;
import it.akademija.backend.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/login")
    public UserResponse login(@RequestBody UserRequest request) {
	return userService.getUser(request);
    }

    @PostMapping("/user/signup")
    public UserResponse signup(@RequestBody UserRequest request) {
	return userService.addUser(request);
    }

}
