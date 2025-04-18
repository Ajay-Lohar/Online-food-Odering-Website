package com.ajay.onlinefoodordering.repository;

import com.ajay.onlinefoodordering.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientItemRepository  extends JpaRepository<IngredientsItem , Long> {

    List<IngredientsItem> findByRestaurantId(Long id);
}
