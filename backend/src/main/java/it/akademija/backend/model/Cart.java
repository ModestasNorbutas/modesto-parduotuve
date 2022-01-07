package it.akademija.backend.model;

import java.util.Set;

public class Cart {

    private String username;
    private Set<CartItem> cartItems;

    public Cart() {

    }

    public Cart(String username, Set<CartItem> cartItems) {
	super();
	this.username = username;
	this.cartItems = cartItems;
    }

    public String getUsername() {
	return username;
    }

    public void setUsername(String username) {
	this.username = username;
    }

    public Set<CartItem> getCartItems() {
	return cartItems;
    }

    public void setCartItems(Set<CartItem> cartItems) {
	this.cartItems = cartItems;
    }

}
