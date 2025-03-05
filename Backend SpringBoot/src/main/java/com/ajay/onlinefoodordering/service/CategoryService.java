package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.Category;

import java.util.List;

public interface CategoryService {

    public Category createCategory(String name , Long userId) throws Exception;

    public List<Category> findCategoryByRestaurantId(Long id) throws  Exception ;

    public Category findCategoryById(Long id) throws  Exception ;


}
