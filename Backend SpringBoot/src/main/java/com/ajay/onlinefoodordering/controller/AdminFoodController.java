package com.ajay.onlinefoodordering.controller;

import com.ajay.onlinefoodordering.model.Food;
import com.ajay.onlinefoodordering.model.Restaurant;
import com.ajay.onlinefoodordering.model.User;
import com.ajay.onlinefoodordering.request.CreateFoodRequest;
import com.ajay.onlinefoodordering.response.MassageResponse;
import com.ajay.onlinefoodordering.service.FoodService;
import com.ajay.onlinefoodordering.service.RestaurentService;
import com.ajay.onlinefoodordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurentService restaurantService;



    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req,
                                           @RequestHeader("Authorization") String jwt) throws Exception {
        User user  = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
        Food food = foodService.createFood(req,req.getCategory(),restaurant);


        return new ResponseEntity<>(food, HttpStatus.CREATED);

    }

    @DeleteMapping ("/{id}")
    public ResponseEntity<MassageResponse> deleteFood(@PathVariable Long id ,
                                                      @RequestHeader("Authorization") String jwt) throws Exception {
        User user  = userService.findUserByJwtToken(jwt);
        foodService.deleteFood(id);

        MassageResponse res = new MassageResponse();
        res.setMessage("Successfully deleted food");



        return new ResponseEntity<>(res, HttpStatus.CREATED);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailibilityStatus(@PathVariable Long id ,
                                                      @RequestHeader("Authorization") String jwt) throws Exception {
        User user  = userService.findUserByJwtToken(jwt);
        Food food =foodService.updateAvailabilityStatus(id);



        return new ResponseEntity<>(food , HttpStatus.CREATED);

    }
}
