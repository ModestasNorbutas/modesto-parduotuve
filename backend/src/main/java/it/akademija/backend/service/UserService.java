package it.akademija.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.backend.model.ResponseBody;
import it.akademija.backend.model.User;
import it.akademija.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseBody getUser(String username, String password) {
	if (userRepository.existsById(username)) {
	    if (userRepository.findById(username)
			      .orElse(new User())
			      .getPassword()
			      .equals(password)) {
		return new ResponseBody(true, userRepository.findById(username)
							    .orElse(new User()),
			"Logged in");
	    } else {
		return new ResponseBody(false, new User(),
			"Incorrect password: '" + password + "' not equal " + userRepository.findById(username)
											    .orElse(new User())
											    .getPassword());
	    }
	} else {
	    return new ResponseBody(false, new User(), "User does not exist");
	}
    }

    public ResponseBody addUser(User user) {
	if (userRepository.existsById(user.getUsername())) {
	    return new ResponseBody(false, user, "Username already exists");
	} else {
	    userRepository.save(user);
	    return new ResponseBody(true, user, "Signed up");
	}
    }

    public ResponseBody deleteUser(User user) {
	if (userRepository.existsById(user.getUsername())) {
	    if (userRepository.findById(user.getUsername())
			      .orElse(new User())
			      .getPassword()
			      .equals(user.getPassword())) {
		userRepository.delete(user);
		return new ResponseBody(true, user, "User deleted");
	    } else {
		return new ResponseBody(false, user, "Incorrect password");
	    }
	} else {
	    return new ResponseBody(false, user, "User does not exist");
	}
    }

    public ResponseBody editUser(User user) {
	if (userRepository.existsById(user.getUsername())) {
	    if (userRepository.findById(user.getUsername())
			      .orElse(new User())
			      .getPassword()
			      .equals(user.getPassword())) {
		userRepository.save(user);
		return new ResponseBody(true, user, "User updated");
	    } else {
		return new ResponseBody(false, user, "Incorrect password");
	    }
	} else {
	    return new ResponseBody(false, user, "User does not exist");
	}
    }

}
