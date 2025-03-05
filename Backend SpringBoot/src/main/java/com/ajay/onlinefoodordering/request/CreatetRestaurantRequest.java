package com.ajay.onlinefoodordering.request;

import com.ajay.onlinefoodordering.model.Address;
import com.ajay.onlinefoodordering.model.ContactInformation;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class CreatetRestaurantRequest {

    private long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;

}
