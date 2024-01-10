package com.example.backend.controllers;

import com.example.backend.dtos.AdminRequest;
import com.example.backend.dtos.AdminResponse;
import com.example.backend.entities.Admin;
import com.example.backend.services.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path = "/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping(path = "/registration")
    public ResponseEntity<AdminResponse>  registration(@RequestBody AdminRequest admin){
        return ResponseEntity.status(HttpStatus.OK).body(adminService.saveAdmin(admin));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<AdminResponse> login(@RequestBody AdminRequest admin){
        return ResponseEntity.status(HttpStatus.OK).body(adminService.loginAdmin(admin));
    }

    @PostMapping(path = "/get")
    public ResponseEntity<AdminResponse> getAdminDetailsById(@RequestBody String id){
        return ResponseEntity.status(HttpStatus.OK).body(adminService.getAdminDetailsById(id));
    }
}
