package it.akademija.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.akademija.backend.model.User;

public interface UserRepository extends JpaRepository<User, String> {

}
