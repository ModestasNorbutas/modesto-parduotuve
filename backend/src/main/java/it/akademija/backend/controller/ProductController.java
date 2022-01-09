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
import it.akademija.backend.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("products")
    public List<Product> getAllProducts() {
	return productService.getAllProducts();
    }

    @GetMapping("products/{productId}")
    public Product getProduct(@PathVariable Integer productId) {
	return productService.getProduct(productId);
    }

    @DeleteMapping("products/{productId}")
    public List<Product> deleteProduct(@PathVariable Integer productId) {
	return productService.deleteProduct(productId);
    }

    @PostMapping("products/add")
    public List<Product> addProduct(@RequestBody Product product) {
	return productService.addProduct(product);
    }

    @PutMapping("products/edit")
    public List<Product> updateProduct(@RequestBody Product product) {
	return productService.addProduct(product);
    }

}
