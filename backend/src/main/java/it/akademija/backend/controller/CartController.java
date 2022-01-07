package it.akademija.backend.controller;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.backend.model.CartItem;

@CrossOrigin
@RestController
@RequestMapping("/")
public class CartController {

    private Map<String, Set<CartItem>> userCarts;

    public CartController() {
	this.userCarts = new ConcurrentHashMap<>();
    }

    @GetMapping("{username}/cart")
    public List<CartItem> getCart(@PathVariable String username) {
	return new ArrayList<>(userCarts.getOrDefault(username, new LinkedHashSet<>()));
    }

    @PostMapping("{username}/cart")
    public List<CartItem> addToCart(@PathVariable String username, @RequestBody CartItem cartItem) {
	Set<CartItem> currentItems = userCarts.getOrDefault(username, new LinkedHashSet<>());
	currentItems.add(cartItem);
	userCarts.put(username, currentItems);
	return getCart(username);
    }

    @PutMapping("{username}/cart")
    public List<CartItem> editCart(@PathVariable String username, @RequestBody CartItem cartItem) {
	Set<CartItem> currentItems = userCarts.getOrDefault(username, new LinkedHashSet<>());
	currentItems = currentItems.stream()
				   .filter(item -> !item.getProductId()
							.equals(cartItem.getProductId()))
				   .collect(Collectors.toSet());
	currentItems.add(cartItem);
	userCarts.put(username, currentItems);
	return getCart(username);
    }

    @DeleteMapping("{username}/{productId}")
    public List<CartItem> removeFromCart(@PathVariable String username, @PathVariable Integer productId) {
	Set<CartItem> currentItems = userCarts.getOrDefault(username, new LinkedHashSet<>());
	currentItems = currentItems.stream()
				   .filter(item -> !item.getProductId()
							.equals(productId))
				   .collect(Collectors.toSet());
	userCarts.put(username, currentItems);
	return getCart(username);
    }

}

//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//    
//
//
