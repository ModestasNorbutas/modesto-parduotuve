package it.akademija.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.backend.model.Product;
import it.akademija.backend.repository.ProductRepository;

@CrossOrigin
@RestController
@RequestMapping("api/") // <<<=== YOU MIGHT NEED TO CHANGE THIS
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("products") // <<<=== YOU MIGHT NEED TO CHANGE THIS
    public List<Product> getAllProducts() {
	return this.productRepository.findAll();
    }

    @GetMapping("products/{productId}")
    public Product getProduct(@PathVariable Integer productId) {
	return productRepository.findById(productId)
				.orElseThrow(() -> new RuntimeException("Unable to find product :("));
    }

    @DeleteMapping("products/{productId}")
    public String deleteProduct(@PathVariable int productId) {
	productRepository.deleteById(productId);
	return "Product #" + productId + " deleted";
    }

    @PostMapping("products/add")
    public Product addProduct(@RequestBody Product product) {
	return productRepository.save(product);
    }

    @PutMapping("products/edit")
    public Product editProduct(@RequestBody Product product) {
	return productRepository.save(product);
    }

}
