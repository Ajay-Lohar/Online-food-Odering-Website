package com.ajay.onlinefoodordering.repository;

import com.ajay.onlinefoodordering.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
