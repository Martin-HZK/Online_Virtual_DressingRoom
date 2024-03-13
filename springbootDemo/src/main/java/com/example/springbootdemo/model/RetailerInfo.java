package com.example.springbootdemo.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "retailerProfile")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RetailerInfo {
    @Id
    private ObjectId id;
    private String username;
    private String password;
    private Map<String, String> clothes;


    public RetailerInfo(String username, String password, Map<String, String> clothes) {
        this.username = username;
        this.password = password;
        this.clothes = clothes;
    }
}
