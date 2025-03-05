package com.ajay.onlinefoodordering.repository;

import com.ajay.onlinefoodordering.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {

    List<Food> findByRestaurantId(Long  restaurantId);

    @Query("select f from Food f where f.name like  %:keyword% or f.foodCategory.name like %:keyord%")
    List<Food>searchFood(@Param("keyword") String keyword);
}
