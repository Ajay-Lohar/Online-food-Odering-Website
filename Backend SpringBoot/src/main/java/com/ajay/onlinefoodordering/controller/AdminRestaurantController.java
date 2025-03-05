package com.ajay.onlinefoodordering.controller;

import com.ajay.onlinefoodordering.model.Restaurant;
import com.ajay.onlinefoodordering.model.User;
import com.ajay.onlinefoodordering.request.CreatetRestaurantRequest;
import com.ajay.onlinefoodordering.response.MassageResponse;
import com.ajay.onlinefoodordering.service.RestaurentService;
import com.ajay.onlinefoodordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {

    @Autowired
    private RestaurentService restaurantService;

    @Autowired
    private UserService userService;



    @PostMapping()
    public ResponseEntity<Restaurant> createRestaurant(
            @RequestBody CreatetRestaurantRequest req,
            @RequestHeader ("Authorization") String jwt) throws Exception {

        User user  = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.createRestaurant(req, user);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(
            @RequestBody CreatetRestaurantRequest req,
            @RequestHeader ("Authorization") String jwt,
            @PathVariable Long  id ) throws Exception {

        User user  = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.updateRestaurant(id,req);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<MassageResponse> deleteRestaurant(
            @RequestHeader ("Authorization") String jwt,
            @PathVariable Long  id ) throws Exception {

        User user  = userService.findUserByJwtToken(jwt);

        restaurantService.deleteRestaurant(id);

        MassageResponse res = new MassageResponse();
        res.setMessage("Restaurant deleted successfully");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }


    @PutMapping("/{id}/status")
    public ResponseEntity<Restaurant> updateRestaurantStatus(
            @RequestHeader ("Authorization") String jwt,
            @PathVariable Long  id ) throws Exception {

        User user  = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.updateRestaurantStatus(id);


        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }


    @GetMapping("/user")
    public ResponseEntity<Restaurant> findRestaurantByUserId(
            @RequestHeader ("Authorization") String jwt
            ) throws Exception {

        User user  = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.getRestaurantByUserId(user.getId());


        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }


}
