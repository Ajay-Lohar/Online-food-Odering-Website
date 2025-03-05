package com.ajay.onlinefoodordering.repository;

import com.ajay.onlinefoodordering.model.Orderitem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<Orderitem , Long> {

}
