package com.example.springbootdemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Map;

/**
 * Represents a retailer's profile information including username, password, and clothes.
 * This class is used to store the retailer's profile information to the database
 * @author Zhikai Hu
 */
@Document(collection = "retailerProfile")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RetailerInfo {
    /**
     * We do not want to expose the id to the client. We would prefer username to be the url
     */
    @Id
    private ObjectId id;

    /**
     * The username of the retailer
     */
    private String username;

    /**
     * The password of the retailer
     */
    private String password;

    /**
     * The clothes of the retailer with the key as the clothes name and the value as the clothes source path
     */
    private Map<String, String> clothes;

    public Map<String, String> getClothes() {
        return clothes;
    }


    /**
     * This constructor is used to create a retailer
     * @param username username
     * @param password password
     * @param clothes the clothes of the retailer
     */
    public RetailerInfo(String username, String password, Map<String, String> clothes) {
        this.username = username;
        this.password = password;
        this.clothes = clothes;
    }
}
