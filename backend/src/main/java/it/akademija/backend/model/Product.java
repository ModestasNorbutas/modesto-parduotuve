package it.akademija.backend.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String imageUrl;
    private Double price;
    private Integer quantity;
    @Column(length = 255)
    private String description;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<CartItem> cartItems = new ArrayList<>();

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

    public Product(Integer id, String name, String imageUrl, Double price, Integer quantity, String description) {
	super();
	this.id = id;
	this.name = name;
	this.imageUrl = imageUrl;
	this.price = price;
	this.quantity = quantity;
	this.description = description;
    }

    public List<CartItem> getCartItems() {
	return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
	this.cartItems = cartItems;
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
