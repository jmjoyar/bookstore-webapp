package com.sc.backend.dto;

import org.springframework.lang.Nullable;

public record SignupRequest(String firstName, String lastName, String email, String password,
			    @Nullable String phoneNumber, @Nullable String city, @Nullable String street,
			    @Nullable String buildingNo) {
}
