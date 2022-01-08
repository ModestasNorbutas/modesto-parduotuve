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

import it.akademija.backend.model.NewProduct;
import it.akademija.backend.model.Product;
import it.akademija.backend.repository.ProductRepository;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("products")
    public List<Product> getAllProducts() {
	return productRepository.getProducts();
    }

    @GetMapping("products/{productId}")
    public Product getProduct(@PathVariable Integer productId) {
	return productRepository.getProducts()
				.stream()
				.filter(product -> product.getId()
							  .equals(productId))
				.findAny()
				.orElseThrow(() -> new RuntimeException("Unable to find product :("));
    }

    @DeleteMapping("products/{productId}")
    public List<Product> deleteProduct(@PathVariable Integer productId) {
	productRepository.deleteProduct(productId);
	return productRepository.getProducts();
    }

    @PostMapping("products/add")
    public List<Product> addProduct(@RequestBody NewProduct newProduct) {
	productRepository.addProduct(newProduct);
	return productRepository.getProducts();
    }

    @PutMapping("products/edit")
    public List<Product> editProduct(@RequestBody Product product) {
	productRepository.replaceProduct(product);
	return productRepository.getProducts();
    }

}
