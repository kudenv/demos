package com.example.demo.repository;


import com.example.demo.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.relational.core.mapping.Table;

@Repository
public interface PaymentRepository extends CrudRepository<Payment, Long> {
}
