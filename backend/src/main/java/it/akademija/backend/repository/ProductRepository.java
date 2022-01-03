package it.akademija.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.akademija.backend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
