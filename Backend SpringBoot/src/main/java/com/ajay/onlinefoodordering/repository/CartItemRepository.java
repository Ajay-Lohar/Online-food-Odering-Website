package com.ajay.onlinefoodordering.repository;

import com.ajay.onlinefoodordering.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
