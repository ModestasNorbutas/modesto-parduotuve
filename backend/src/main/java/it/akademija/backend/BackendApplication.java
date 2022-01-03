package it.akademija.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import it.akademija.backend.model.Product;
import it.akademija.backend.repository.ProductRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
	SpringApplication.run(BackendApplication.class, args);
    }

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
	this.productRepository.save(new Product("Beatiful RGB", "https://picsum.photos/202/101", 560, 10,
		"This is a beautiful picture, created by talented atrists"));
	this.productRepository.save(new Product("Amazing Picture", "https://picsum.photos/204/102", 856, 8,
		"This is a beautiful picture, created by talented atrists"));
	this.productRepository.save(new Product("Undescribable", "https://picsum.photos/208/104", 999, 7,
		"This is a beautiful picture, created by talented atrists"));
	this.productRepository.save(new Product("Creative Image", "https://picsum.photos/206/103", 123, 4,
		"This is a beautiful picture, created by talented atrists"));
    }

}
