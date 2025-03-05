package com.ajay.onlinefoodordering.controller;

import com.ajay.onlinefoodordering.model.Food;
import com.ajay.onlinefoodordering.model.Restaurant;
import com.ajay.onlinefoodordering.model.User;
import com.ajay.onlinefoodordering.request.CreateFoodRequest;
import com.ajay.onlinefoodordering.service.FoodService;
import com.ajay.onlinefoodordering.service.RestaurentService;
import com.ajay.onlinefoodordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {


    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurentService restaurantService;



    @GetMapping("/search")
    public ResponseEntity<List<Food>>searchFood(@RequestParam String name,
                                           @RequestHeader("Authorization") String jwt) throws Exception {
        User user  = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.searchFood(name);


        return new ResponseEntity<>(foods, HttpStatus.CREATED);

    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>>getRestaurantFood(
            @RequestParam boolean vegetarian,
            @RequestParam boolean seasonal,
            @RequestParam boolean nonVeg,
            @RequestParam (required = false) String food_category,
            @PathVariable long restaurantId,

            @RequestHeader("Authorization") String jwt) throws Exception {
        User user  = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.getRestaurantFood(restaurantId,vegetarian,seasonal,nonVeg,food_category);


        return new ResponseEntity<>(foods, HttpStatus.OK);

    }


}
