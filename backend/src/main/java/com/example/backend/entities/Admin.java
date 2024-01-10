package com.example.backend.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "admins")
@NoArgsConstructor
public class Admin {

    @Id
    private String id;
    @NonNull
    private String userName;
    private String email;
    private String password;
    @DBRef
    private List<String> roleIds;
}
