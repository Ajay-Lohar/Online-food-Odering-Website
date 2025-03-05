package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.Category;
import com.ajay.onlinefoodordering.model.Restaurant;
import com.ajay.onlinefoodordering.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private RestaurentService restaurantService;

    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public Category createCategory(String name, Long userId) throws Exception {
        Restaurant restaurant = restaurantService.getRestaurantByUserId(userId);
        Category category = new Category();
        category.setName(name);
        category.setRestaurant(restaurant);

        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByRestaurantId(Long id) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(id);
        return categoryRepository.findByRestaurantId(restaurant.getId());
    }

    @Override
    public Category findCategoryById(Long id) throws Exception {
        Optional<Category> optinalCategory = categoryRepository.findById(id);

        if (optinalCategory.isEmpty()) {
            throw new Exception("Category not found");
        }
        return optinalCategory.get();
    }
}
