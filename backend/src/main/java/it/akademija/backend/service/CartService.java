package it.akademija.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.akademija.backend.dto.CartRequest;
import it.akademija.backend.model.CartItem;
import it.akademija.backend.model.Product;
import it.akademija.backend.model.User;
import it.akademija.backend.repository.CartItemRepository;
import it.akademija.backend.repository.ProductRepository;
import it.akademija.backend.repository.UserRepository;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    public List<CartItem> addItem(CartRequest request) {
	User user = userRepository.findById(request.getUsername())
				  .orElseThrow(() -> new RuntimeException());
	Product product = productRepository.findById(request.getProductId())
					   .orElseThrow(() -> new RuntimeException());
	CartItem cartItem = cartItemRepository.findByUserUsernameAndProductId(request.getUsername(),
		request.getProductId())
					      .orElse(new CartItem(product, user));
	cartItemRepository.save(cartItem);
	return getItems(request.getUsername());
    }

    public List<CartItem> editItem(CartRequest request) {
	User user = userRepository.findById(request.getUsername())
				  .orElseThrow(() -> new RuntimeException());
	Product product = productRepository.findById(request.getProductId())
					   .orElseThrow(() -> new RuntimeException());
	CartItem cartItem = new CartItem(request.getItemId(), request.getQuantity(), product, user);
	cartItemRepository.save(cartItem);
	return getItems(request.getUsername());
    }

    public List<CartItem> deleteItem(CartRequest request) {
	cartItemRepository.deleteById(request.getItemId());
	return getItems(request.getUsername());
    }

    public List<CartItem> getItems(String username) {
	Optional<User> optionalUser = userRepository.findById(username);
	if (optionalUser.isPresent()) {
	    return optionalUser.get()
			       .getCartItems();
	} else {
	    return new ArrayList<>();
	}
    }

}
