package com.example.backend.services;

import com.example.backend.dtos.AdminRequest;
import com.example.backend.dtos.AdminResponse;
import com.example.backend.entities.Admin;
import com.example.backend.repositories.AdminRepo;
import lombok.Data;
import org.springframework.stereotype.Service;
import java.util.NoSuchElementException;

@Service
@Data
public class AdminService {
    private final AdminRepo adminRepo;

    public AdminResponse saveAdmin(AdminRequest adminRequest) {
        Admin admin = AdminRequest.fromAdminRequest(adminRequest);
        return AdminResponse.fromAdmin(adminRepo.save(admin));
    }

    public AdminResponse loginAdmin(AdminRequest adminRequest) {
        Admin admin = AdminRequest.fromAdminRequest(adminRequest);
        Admin user = adminRepo.findByUserName(admin.getUserName()).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + admin.getUserName()));
        if(user.getPassword().equals(admin.getPassword())){
            return AdminResponse.fromAdmin(adminRepo.save(user));
        }
        return null;
    }

    public AdminResponse getAdminDetailsByName(String name) {
        Admin user = adminRepo.findByUserName(name).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + name));
        return AdminResponse.fromAdmin(adminRepo.save(user));
    }

    public AdminResponse getAdminDetailsById(String id) {
        Admin user = adminRepo.findById(id).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + id));
        return AdminResponse.fromAdmin(adminRepo.save(user));
    }
}
