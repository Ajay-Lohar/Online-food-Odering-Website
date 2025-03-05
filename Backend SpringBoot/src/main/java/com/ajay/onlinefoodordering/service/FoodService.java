package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.Category;
import com.ajay.onlinefoodordering.model.Food;
import com.ajay.onlinefoodordering.model.Restaurant;
import com.ajay.onlinefoodordering.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category category , Restaurant restaurant);

    void deleteFood(Long foodId)throws  Exception;

    public List<Food> getRestaurantFood(Long restaurantId,boolean isVegetarian,
                                        boolean isNonveg ,boolean isSeasional,
                                        String foodCategory)throws Exception;

    public List<Food>searchFood(String keyword)throws Exception;

    public Food findFoodById(Long foodId)throws Exception;

    public Food updateAvailabilityStatus(Long foodId)throws Exception;


}
