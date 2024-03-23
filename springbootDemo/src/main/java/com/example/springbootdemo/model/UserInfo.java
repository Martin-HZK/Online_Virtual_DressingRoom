package com.example.springbootdemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents a user's profile information including username and password.
 * This class is used to store the user's profile information to the database
 * @author Zhikai Hu
 */
@Document(collection = "userProfile")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {
    /**
     * We do not want to expose the id to the client. We would prefer username to be the url
     */
    @Id
    private ObjectId id;

    /**
     * The username of the user
     */
    private String username;

    /**
     * The password of the user
     */
    private String password;

    /**
     * This constructor is used to create a user
     * @param username username
     * @param password password
     */
    public UserInfo(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
