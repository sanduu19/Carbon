package com.example.backend.dtos;

import com.example.backend.entities.Admin;

public record AdminResponse(
        String id,
        String userName,
        String email,
        String role
) {
    public static AdminResponse fromAdmin(Admin admin) {
        return new AdminResponse(
                admin.getId(),
                admin.getUserName(),
                admin.getEmail(),
                admin.getRole().getName()
        );
    }
}
