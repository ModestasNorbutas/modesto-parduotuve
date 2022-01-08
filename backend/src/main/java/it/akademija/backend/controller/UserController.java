package it.akademija.backend.controller;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.backend.model.ResponseBody;
import it.akademija.backend.model.User;

@CrossOrigin
@RestController
@RequestMapping("/")
public class UserController {

    private HashMap<String, User> allUsers;

    public UserController() {
	this.allUsers = new HashMap<>();
    }

    @PostMapping("login")
    public ResponseBody login(@RequestBody User user) {
	User existingUser = allUsers.get(user.getUsername());
	if (existingUser == null) {
	    return new ResponseBody(false, user, "Unable to find user :(");
	} else if (!existingUser.getPassword()
				.equals(user.getPassword())) {
	    return new ResponseBody(false, user, "Password was incorrect!");
	} else {
	    return new ResponseBody(true, existingUser, "Success!");
	}
    }

    @PostMapping("signup")
    public ResponseBody signup(@RequestBody User user) {
	if (allUsers.containsKey(user.getUsername())) {
	    return new ResponseBody(false, user, "User already exists");
	} else {
	    allUsers.put(user.getUsername(), user);
	    return new ResponseBody(true, user, "Success!");
	}
    }

}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
