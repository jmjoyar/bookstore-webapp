package com.sc.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sc.backend.domain.Customer;
import com.sc.backend.dto.LoginRequest;
import com.sc.backend.dto.SignupRequest;
import com.sc.backend.repository.CustomerRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomerRepository customerRepository;

    // TODO: This is not used yet, but it will be used in the future to logout
    // users.
    private final SecurityContextLogoutHandler logoutHandler = new SecurityContextLogoutHandler();

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.email(),
                loginRequest.password());
        Authentication authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authenticationResponse);
        SecurityContextHolder.setContext(context);
        return new ResponseEntity<>("Login successfully", HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerCustomer(@RequestBody SignupRequest signupRequest) {
        // Check if email already exists in DB
        if (customerRepository.existsByEmail(signupRequest.email())) {
            return new ResponseEntity<>("User already exists", HttpStatus.BAD_REQUEST);
        }
        // Create a new user
        // TODO: create a less cluttering code to registry users; maybe with a build
        // pattern.
        Customer customer = new Customer();
        customer.setFirstName(signupRequest.firstName());
        customer.setLastName(signupRequest.lastName());
        customer.setEmail(signupRequest.email());
        customer.setPassword(passwordEncoder.encode(signupRequest.password()));
        customer.setPhoneNumber(signupRequest.phoneNumber());
        customer.setCity(signupRequest.city());
        customer.setStreet(signupRequest.street());
        customer.setBuildingNo(signupRequest.buildingNo());

        customerRepository.save(customer);
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }

}
