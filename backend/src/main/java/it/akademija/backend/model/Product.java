package it.akademija.backend.model;

import java.util.Objects;

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

    @Override
    public int hashCode() {
	return Objects.hash(description, id, imageUrl, name, price, quantity);
    }

    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (obj == null)
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	Product other = (Product) obj;
	return Objects.equals(description, other.description) && Objects.equals(id, other.id)
		&& Objects.equals(imageUrl, other.imageUrl) && Objects.equals(name, other.name)
		&& Objects.equals(price, other.price) && Objects.equals(quantity, other.quantity);
    }

}
