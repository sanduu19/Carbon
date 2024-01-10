package com.example.backend.dtos;

import com.example.backend.entities.Admin;

public record AdminRequest(
        String id,
        String userName,
        String password,
        String email
) {
    public static Admin fromAdminRequest(AdminRequest adminRequest) {
        Admin admin = new Admin();
        admin.setId(adminRequest.id);
        admin.setEmail(adminRequest.email);
        admin.setPassword(adminRequest.password);
        admin.setUserName(adminRequest.userName);
        return admin;
    }
}
