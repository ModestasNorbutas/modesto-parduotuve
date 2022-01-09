package it.akademija.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCTS")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String imageUrl;
    private Double price;
    private Integer quantity;
    private String description;

    public Product() {

    }

    public Product(String name, String imageUrl, Double price, Integer quantity, String description) {
	super();
	this.name = name;
	this.imageUrl = imageUrl;
	this.price = price;
	this.quantity = quantity;
	this.description = description;
    }

    public Integer getId() {
	return id;
    }

    public String getName() {
	return name;
    }

    public Product setName(String name) {
	this.name = name;
	return this;
    }

    public String getImageUrl() {
	return imageUrl;
    }

    public Product setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
	return this;
    }

    public Double getPrice() {
	return price;
    }

    public Product setPrice(Double price) {
	this.price = price;
	return this;
    }

    public Integer getQuantity() {
	return quantity;
    }

    public Product setQuantity(Integer quantity) {
	this.quantity = quantity;
	return this;
    }

    public String getDescription() {
	return description;
    }

    public Product setDescription(String description) {
	this.description = description;
	return this;
    }

    public void replace(Product product) {
	this.name = product.getName();
	this.imageUrl = product.getImageUrl();
	this.price = product.getPrice();
	this.quantity = product.getQuantity();
	this.description = product.getDescription();
    }

}
