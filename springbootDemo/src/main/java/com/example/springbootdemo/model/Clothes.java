package com.example.springbootdemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents a clothes information including clothes name, retailer name, description, category, brand, and link.
 * This class is used to store the clothes information to the database
 * @author Zhikai Hu
 */
@Document(collection = "sample_clothes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Clothes {
    /**
     * We do not want to expose the id to the client. We would prefer clothes_name to be the url
     */
    @Id
    private ObjectId id;

    /**
     * The clothes name
     */
    private String clothes_name;

    /**
     * The clothes ID
     */
    private String clothes_ID;

    /**
     * The name of the retailer who uploaded the clothes
     */
    private String retailerName;

    /**
     * The description of the clothes
     */
    private String description;

    /**
     * The category of the clothes
     */
    private String category;

    /**
     * The brand of the clothes
     */
    private String brand;

    /**
     * The link of the clothes
     */
    private String link;

    /**
     * The price of the clothes
     */
    private int price;

    /**
     * The advised gender suitable the clothes
     */
    private String gender;

    /**
     * This constructor is used to create a clothes
     * @param clothes_name clothes name
     * @param link the path to the clothes
     */
    public Clothes(String clothes_name, String clothes_ID, String retailer_name, String link, String description, String category, String brand, int price, String gender) {
        this.clothes_name = clothes_name;
        this.clothes_ID = clothes_ID;
        this.retailerName = retailer_name; // this retailer info need to be further passed in
        this.link = link;
        this.description = description;
        this.category = category;
        this.brand = brand;
        this.price = price;
        this.gender = gender;
    }
}
