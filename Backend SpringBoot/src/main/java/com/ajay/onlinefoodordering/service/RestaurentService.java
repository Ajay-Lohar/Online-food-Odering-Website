package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.dto.RestaurantDto;
import com.ajay.onlinefoodordering.model.Restaurant;
import com.ajay.onlinefoodordering.model.User;
import com.ajay.onlinefoodordering.request.CreatetRestaurantRequest;

import java.util.List;

public interface RestaurentService {

    public Restaurant createRestaurant(CreatetRestaurantRequest req , User user);

    public Restaurant updateRestaurant(Long restaurantId,CreatetRestaurantRequest updatedRestaurant)throws Exception ;

    public void deleteRestaurant(Long restaurantId)throws Exception ;

    public List<Restaurant>getAllRestaurants()throws Exception ;

    public List<Restaurant>searchRestaurant(String keyword)throws Exception ;

    public Restaurant findRestaurantById(Long id)throws Exception ;

    public Restaurant getRestaurantByUserId(Long userId)throws Exception ;

    public RestaurantDto addToFavorites(Long restaurantId, User user)throws Exception ;

    public Restaurant updateRestaurantStatus(Long id)throws Exception ;

}
