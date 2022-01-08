package it.akademija.backend.model;

import java.util.LinkedHashSet;
import java.util.Set;

public class Cart {

    private String username;
    private LinkedHashSet<CartItem> cartItems;

    public Cart() {

    }

    public Cart(String username, LinkedHashSet<CartItem> cartItems) {
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

    public void setCartItems(LinkedHashSet<CartItem> cartItems) {
	this.cartItems = cartItems;
    }

}
