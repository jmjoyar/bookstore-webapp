package com.sc.backend.domain;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Data
@NoArgsConstructor
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    private Long id;

    @NonNull
    @Column(nullable = false)
    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NonNull
    @Column(nullable = false)
    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @NonNull
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Email cannot be empty")
    private String email;

    @NonNull
    @Column(nullable = false)
    @NotBlank(message = "Password cannot be empty")
    private String password;

    private String phoneNumber;

    private String city;

    private String street;

    private String buildingNo;

    @OneToMany(mappedBy = "customer")
    private Set<PurchaseOrder> orders = new HashSet<>();

    @OneToMany(mappedBy = "customer")
    private Set<Review> reviews = new HashSet<>();
}
