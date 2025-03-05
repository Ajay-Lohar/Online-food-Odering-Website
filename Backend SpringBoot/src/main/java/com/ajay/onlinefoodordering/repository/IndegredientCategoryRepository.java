package com.ajay.onlinefoodordering.repository;

import com.ajay.onlinefoodordering.model.IngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IndegredientCategoryRepository extends JpaRepository<IngredientCategory , Long> {

    List<IngredientCategory> findByRestaurantId(Long id);


}
