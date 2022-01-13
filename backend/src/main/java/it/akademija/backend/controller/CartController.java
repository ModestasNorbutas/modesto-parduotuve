package it.akademija.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.akademija.backend.dto.CartRequest;
import it.akademija.backend.model.CartItem;
import it.akademija.backend.service.CartService;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("cart/add")
    public List<CartItem> addItem(@RequestBody CartRequest request) {
	return cartService.addItem(request);
    }

    @PutMapping("cart/edit")
    public List<CartItem> editItem(@RequestBody CartRequest request) {
	return cartService.editItem(request);
    }

    @GetMapping("cart/{username}")
    public List<CartItem> getItems(@PathVariable String username) {
	return cartService.getItems(username);
    }

    @DeleteMapping("cart/delete")
    public List<CartItem> deleteItem(@RequestBody CartRequest request) {
	return cartService.deleteItem(request);
    }

}
