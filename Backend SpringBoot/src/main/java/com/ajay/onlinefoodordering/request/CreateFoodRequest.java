package com.ajay.onlinefoodordering.request;

import com.ajay.onlinefoodordering.model.Category;
import com.ajay.onlinefoodordering.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private String description;
    private long price;


    private Category category;

    private List<String> images;

    private long restaurantId;

    private boolean vegetarian;

    private boolean seasional;

    private List<IngredientsItem> ingredients;
}
