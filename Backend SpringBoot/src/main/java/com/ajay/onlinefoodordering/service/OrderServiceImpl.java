package com.ajay.onlinefoodordering.service;

import com.ajay.onlinefoodordering.model.*;
import com.ajay.onlinefoodordering.repository.*;
import com.ajay.onlinefoodordering.request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestaurentService restaurentService;

    @Autowired
    private CartService cartService;

    @Override
    public Order createOrder(OrderRequest order, User user) throws Exception {
        Address shippAddress = order.getDeliveryAddress();

        Address savedAddress = addressRepository.save(shippAddress);

        if (!user.getAddresses().contains(savedAddress)) {
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }

        Restaurant restaurant = restaurentService.findRestaurantById(order.getRestaurantId());

        Order createdOrder = new Order();
        createdOrder.setCustomer(user);
        createdOrder.setCreatedAt(new Date());
        createdOrder.setOrderStatus("pendding...");
        createdOrder.setDeliveryAddress(savedAddress);
        createdOrder.setRestaurant(restaurant);

        Cart cart = cartService.findCartByUserId(user.getId());

        List<Orderitem> orderitems = new ArrayList<>();

        for (CartItem cartItem :cart.getItem()){
            Orderitem orderitem = new Orderitem();
            orderitem.setFood(cartItem.getFood());
            orderitem.setIngredients(cartItem.getIngredients());
            orderitem.setQuantity(cartItem.getQuantity());
            orderitem.setTotalPrice(cartItem.getTotalPrice());

            Orderitem savedOrderItem = orderItemRepository.save(orderitem);
            orderitems.add(savedOrderItem);
        }
        Long totalPrice = cartService.calculateCartTotal(cart);

        createdOrder.setItems(orderitems);
        createdOrder.setTotalPrice(totalPrice);

        Order savedOrder = orderRepository.save(createdOrder);
        restaurant.getOrders().add(savedOrder);



        return createdOrder;
    }

    @Override
    public Order updateOrder(Long orderId, String orderStatus) throws Exception {
        Order order = findOrderById(orderId);
        if(orderStatus.equals("Out for Delivery")
                || orderStatus.equals("delivered")
                || orderStatus.equals("completed")
                || orderStatus.equals("painding")){

            order.setOrderStatus(orderStatus);

            return orderRepository.save(order);

        }
        throw  new Exception("please select vallid oder status");
    }

    @Override
    public Order cancelOrder(Long orderId) throws Exception {
        Order order =findOrderById(orderId);
        orderRepository.deleteById(orderId);
        return order;
    }

    @Override
    public List<Order> getUserOrder(Long userId) throws Exception {
        return orderRepository.findByCustomerId(userId);

    }

    @Override
    public List<Order> getReataurantOrder(Long restaurentId, String orderStatus) throws Exception {
        List <Order> orders =orderRepository.findByRestaurantId(restaurentId);

        if (orderStatus!=null){
            orders =orders.stream().filter(order ->
                    order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
        }
        return orders;
    }

    @Override
    public Order findOrderById(Long orderId) throws Exception {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isEmpty()) {
            throw  new Exception("Order not found");
        }
        return optionalOrder.get();
    }
}
