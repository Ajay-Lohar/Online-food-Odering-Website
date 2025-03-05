package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.Cart;
import com.ajay.onlinefoodordering.model.CartItem;
import com.ajay.onlinefoodordering.request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest req, String jwt ) throws Exception;

    public CartItem updateItemQuantity(Long cartItemId, int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId ,String jwt) throws Exception;

    public Long calculateCartTotal(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findCartByUserId(Long userId) throws Exception;

    public Cart clearCart(Long userId) throws Exception;

}
