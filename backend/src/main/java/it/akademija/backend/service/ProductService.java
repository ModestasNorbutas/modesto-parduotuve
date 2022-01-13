package it.akademija.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.backend.dto.ProductRequest;
import it.akademija.backend.model.Product;
import it.akademija.backend.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductRequest> getAllProducts() {
	return productRepository.findAll()
				.stream()
				.map(product -> new ProductRequest(product))
				.collect(Collectors.toList());
    }

    public Product getProduct(Integer productId) {
	return productRepository.findById(productId)
				.orElseThrow(() -> new RuntimeException("unable to find product"));
    }

    public List<ProductRequest> addProduct(ProductRequest request) {
	Product product = new Product(request.getName(), request.getImageUrl(), request.getPrice(),
		request.getQuantity(), request.getDescription());
	productRepository.save(product);
	return getAllProducts();
    }

    public List<ProductRequest> deleteProduct(Integer productId) {
	productRepository.deleteById(productId);
	return getAllProducts();
    }

    public List<ProductRequest> editProduct(ProductRequest request) {
	Product product = new Product(request.getId(), request.getName(), request.getImageUrl(), request.getPrice(),
		request.getQuantity(), request.getDescription());
	productRepository.save(product);
	return getAllProducts();
    }

}
