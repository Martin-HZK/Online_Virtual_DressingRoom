package com.example.springbootdemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sample_clothes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Clothes {
    @Id
    private ObjectId id;
    private String clothes_name;
    private String link;

    /**
     * This constructor is used to create a clothes
     * @param clothes_name
     * @param link
     */
    public Clothes(String clothes_name, String link) {
        this.clothes_name = clothes_name;
        this.link = link;
    }

}