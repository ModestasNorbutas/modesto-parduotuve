package it.akademija.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.backend.model.ResponseBody;
import it.akademija.backend.model.User;
import it.akademija.backend.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/login/{username}")
    public ResponseBody login(@PathVariable String username, @RequestBody String password) {
	return userService.getUser(username, password);
    }

    @PostMapping("/user/signup")
    public ResponseBody signup(@RequestBody User user) {
	return userService.addUser(user);
    }

    @DeleteMapping("/user/delete")
    public ResponseBody deleteUser(@RequestBody User user) {
	return userService.deleteUser(user);
    }

    @PutMapping("/user/edit")
    public ResponseBody editUser(@RequestBody User user) {
	return userService.editUser(user);
    }

}
