package it.akademija.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.backend.dto.UserRequest;
import it.akademija.backend.dto.UserResponse;
import it.akademija.backend.model.User;
import it.akademija.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserResponse getUser(UserRequest request) {
	Optional<User> optionalUser = userRepository.findByUsernameAndPassword(request.getUsername(),
		request.getPassword());
	if (optionalUser.isPresent()) {
	    return new UserResponse(true, optionalUser.get(), "Success");
	} else {
	    return new UserResponse(false, new User(), "Wrong username or password");
	}
    }

    public UserResponse addUser(UserRequest request) {
	User user = new User(request.getUsername(), request.getPassword());
	Optional<User> optionalUser = userRepository.findById(request.getUsername());
	if (optionalUser.isEmpty()) {
	    userRepository.save(user);
	    return new UserResponse(true, user, "Success");
	} else {
	    return new UserResponse(false, user, "User already exists");
	}
    }

}
