package it.akademija.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.backend.model.Product;
import it.akademija.backend.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
	return productRepository.findAll();
    }

    public Product getProduct(Integer productId) {
	return productRepository.findById(productId)
				.orElseThrow(() -> new RuntimeException("unable to find product"));
    }

    public List<Product> addProduct(Product product) {
	productRepository.save(product);
	return productRepository.findAll();
    }

    public List<Product> deleteProduct(Integer productId) {
	productRepository.deleteById(productId);
	return productRepository.findAll();
    }

}
