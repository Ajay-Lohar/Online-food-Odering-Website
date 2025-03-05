package com.ajay.onlinefoodordering.request;

import com.ajay.onlinefoodordering.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    private Long restaurantId;
    private Address deliveryAddress ;

}
