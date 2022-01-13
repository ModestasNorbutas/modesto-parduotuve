package it.akademija.backend.dto;

import it.akademija.backend.model.Product;

public class ProductRequest {

    private Integer id;
    private String name;
    private String imageUrl;
    private Double price;
    private Integer quantity;
    private String description;

    public ProductRequest() {

    }

    public ProductRequest(Product product) {
	this.id = product.getId();
	this.name = product.getName();
	this.imageUrl = product.getImageUrl();
	this.price = product.getPrice();
	this.quantity = product.getQuantity();
	this.description = product.getDescription();
    }

    public Integer getId() {
	return id;
    }

    public void setId(Integer id) {
	this.id = id;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public String getImageUrl() {
	return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
    }

    public Double getPrice() {
	return price;
    }

    public void setPrice(Double price) {
	this.price = price;
    }

    public Integer getQuantity() {
	return quantity;
    }

    public void setQuantity(Integer quantity) {
	this.quantity = quantity;
    }

    public String getDescription() {
	return description;
    }

    public void setDescription(String description) {
	this.description = description;
    }

}
