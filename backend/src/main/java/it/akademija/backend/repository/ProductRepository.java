package it.akademija.backend.repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Repository;

import it.akademija.backend.model.NewProduct;
import it.akademija.backend.model.Product;

@Repository
public class ProductRepository {

    private List<Product> products;

    public ProductRepository() {
	products = Collections.synchronizedList(new ArrayList<>());

	products.add(new Product("Beatiful RGB", "https://picsum.photos/202/101", (double) 560, 10,
		"This is a beautiful picture, created by talented atrists"));
	products.add(new Product("Amazing Picture", "https://picsum.photos/204/102", (double) 856, 8,
		"This is a beautiful picture, created by talented atrists"));
	products.add(new Product("Undescribable", "https://picsum.photos/208/104", (double) 999, 7,
		"This is a beautiful picture, created by talented atrists"));
	products.add(new Product("Creative Image", "https://picsum.photos/206/103", (double) 123, 4,
		"This is a beautiful picture, created by talented atrists"));
    }

    public void addProduct(NewProduct newProduct) {
	this.products.add(new Product(newProduct.getName(), newProduct.getImageUrl(), newProduct.getPrice(),
		newProduct.getQuantity(), newProduct.getDescription()));
    }

    public void deleteProduct(Integer productId) {
	this.products.removeIf(product -> product.getId()
						 .equals(productId));
    }

    public void replaceProduct(Product product) {
	this.products.forEach(existingProduct -> {
	    if (existingProduct.getId()
			       .equals(product.getId())) {
		existingProduct.replace(product);
	    }
	});
    }

    public List<Product> getProducts() {
	return products;
    }

}