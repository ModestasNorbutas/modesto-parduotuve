package it.akademija.backend.model;

public class NewProduct {

    private String name;
    private String imageUrl;
    private Double price;
    private Integer quantity;
    private String description;

    public NewProduct() {
	super();
    }

    public NewProduct(String name, String imageUrl, Double price, Integer quantity, String description) {
	super();
	this.name = name;
	this.imageUrl = imageUrl;
	this.price = price;
	this.quantity = quantity;
	this.description = description;
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
