package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.Category;
import com.ajay.onlinefoodordering.model.Food;
import com.ajay.onlinefoodordering.model.Restaurant;
import com.ajay.onlinefoodordering.repository.FoodRepository;
import com.ajay.onlinefoodordering.request.CreateFoodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodRepository foodRepository;



    @Override
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {
        Food food = new Food();
        food.setFoodCategory(category);
        food.setRestaurant(restaurant);
        food.setDescription(req.getDescription());
        food.setImages(req.getImages());
        food.setName(req.getName());
        food.setPrice(req.getPrice());
        food.setIngredients(req.getIngredients());
        food.setSeasonal(req.isSeasional());
        food.setVegetarian(req.isVegetarian());

        Food savedFood = foodRepository.save(food);
        restaurant.getFoods().add(savedFood);

        return savedFood;
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setRestaurant(null);
        foodRepository.save(food);


    }

    @Override
    public List<Food> getRestaurantFood(Long restaurantId, boolean isVegetarian,
                                        boolean isNonveg, boolean isSeasional,
                                        String foodCategory) throws Exception {

        List<Food> foods = foodRepository.findByRestaurantId(restaurantId);

        if (isVegetarian) {
            foods =filterByVegetarian(foods ,isVegetarian);
        }
        if (isNonveg) {
            foods = filterByNonveg(foods,isNonveg);
        }
        if (isSeasional) {
            foods =filterBySeasonal(foods , isSeasional);
            
        }
        if (foodCategory != null && !foodCategory.equals("")) {
            foods =filterByCategory(foods,foodCategory);
            

        }

        return foods;
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {
        return foods.stream().filter(food ->{
            if (food.getFoodCategory()!=null) {
                return food.getFoodCategory().getName().equals(foodCategory);
            }
            return false;
        }).collect(Collectors.toList());
    }

    private List<Food> filterBySeasonal(List<Food> foods, boolean isSeasional) {
        return foods.stream().filter(food -> food.isSeasonal()==isSeasional).collect(Collectors.toList());
    }

    private List<Food> filterByNonveg(List<Food> foods, boolean isNonveg) {
        return foods.stream().filter(food -> food.isVegetarian()==false).collect(Collectors.toList());
    }

    private List<Food> filterByVegetarian(List<Food> foods, boolean isVegetarian) {
        return foods.stream().filter(food -> food.isVegetarian() == isVegetarian).collect(Collectors.toList());
    }

    @Override
    public List<Food> searchFood(String keyword) throws Exception {

        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> optionalFood = foodRepository.findById(foodId);
        if (optionalFood.isEmpty()) {
            throw new Exception(foodId + " is Not Exist");
        }
        return optionalFood.get();
    }

    @Override
    public Food updateAvailabilityStatus(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(!food.isAvailable());
         return foodRepository.save(food);
    }
}
