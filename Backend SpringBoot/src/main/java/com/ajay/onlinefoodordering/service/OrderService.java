package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.Order;
import com.ajay.onlinefoodordering.model.User;
import com.ajay.onlinefoodordering.request.OrderRequest;

import java.util.List;

public interface OrderService {
    public Order createOrder(OrderRequest order , User user) throws Exception;

    public Order updateOrder(Long orderId , String  OrderStatus ) throws  Exception ;

    public Order cancelOrder(Long orderId) throws  Exception ;

    public List<Order> getUserOrder(Long userId)throws  Exception ;

    public List<Order> getReataurantOrder(Long restaurentId ,String orderStatus)throws  Exception ;

    public Order findOrderById(Long orderId)throws  Exception ;
}
