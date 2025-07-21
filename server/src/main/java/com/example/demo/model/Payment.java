package com.example.demo.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "payments")
@Getter // Generates getter methods for all fields
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="amount", length=50, nullable=false, unique=false)
    private int amount;

    @Column(name="status", length=50, nullable=false, unique=false)
    private String status;

    @Column(name="email", length=50, nullable=false, unique=false)
    private String email;
}