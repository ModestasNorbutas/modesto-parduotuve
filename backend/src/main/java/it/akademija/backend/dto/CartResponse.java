package it.akademija.backend.dto;

public class CartResponse {

    private Integer product_id;
    private String name;
    private String imageUrl;
    private Double price;
    private Integer quantity;

    public CartResponse(Integer product_id, String name, String imageUrl, Double price, Integer quantity) {
	super();
	this.product_id = product_id;
	this.name = name;
	this.imageUrl = imageUrl;
	this.price = price;
	this.quantity = quantity;
    }

    public Integer getProduct_id() {
	return product_id;
    }

    public void setProduct_id(Integer product_id) {
	this.product_id = product_id;
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

}
