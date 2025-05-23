package com.ajay.onlinefoodordering.service;


import com.ajay.onlinefoodordering.model.IngredientCategory;
import com.ajay.onlinefoodordering.model.IngredientsItem;

import java.util.List;

public interface IngredientsService {

     public IngredientCategory createIngredientCategory(String name , Long restaurantId) throws  Exception;

     public IngredientCategory findIngredientCategoryById(Long id)throws  Exception;

     public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id)throws  Exception;

     public IngredientsItem createIngredientsItem(String ingredientName,
                                                  Long restaurantId ,
                                                  Long categoryId) throws  Exception;

     public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId);

     public IngredientsItem updateStock(Long id) throws  Exception;
}
