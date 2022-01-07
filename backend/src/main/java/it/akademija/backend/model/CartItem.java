package it.akademija.backend.model;

import java.util.Objects;

public class CartItem {

    private Integer productId;
    private Integer quantity;

    public CartItem() {

    }

    public CartItem(Integer productId, Integer quantity) {
	super();
	this.productId = productId;
	this.quantity = quantity;
    }

    public Integer getProductId() {
	return productId;
    }

    public void setProductId(Integer productId) {
	this.productId = productId;
    }

    public int getQuantity() {
	return quantity;
    }

    public void setQuantity(Integer quantity) {
	this.quantity = quantity;
    }

    @Override
    public int hashCode() {
	return Objects.hash(productId, quantity);
    }

    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (obj == null)
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	CartItem other = (CartItem) obj;
	return Objects.equals(productId, other.productId) && Objects.equals(quantity, other.quantity);
    }

}
