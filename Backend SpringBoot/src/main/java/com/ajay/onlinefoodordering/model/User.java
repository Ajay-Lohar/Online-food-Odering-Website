package com.ajay.onlinefoodordering.model;

import com.ajay.onlinefoodordering.dto.RestaurantDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private  String fullname;

    private  String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private  String password;

    private USER_ROLE role  =USER_ROLE.ROLE_COSTUMER;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL ,mappedBy = "customer")
    private List<Order> orders = new ArrayList<>();

    @ElementCollection
    private List<RestaurantDto>favorites = new ArrayList();

    @OneToMany(cascade = CascadeType.ALL , orphanRemoval = true)
    private List<Address> addresses =new ArrayList<>();



}
