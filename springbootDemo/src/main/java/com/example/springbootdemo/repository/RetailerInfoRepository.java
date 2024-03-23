package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.RetailerInfo;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

/**
 * This interface is used to interact with the database to store and retrieve retailer information
 * @author Zhikai Hu
 */
@Repository
public interface RetailerInfoRepository extends MongoRepository<RetailerInfo, ObjectId> {
    /**
     * This method is used to find retailer information by username
     * @param username the username of the retailer
     * @return retailer information
     */
    Optional<RetailerInfo> findRetailerInfoByUsername(String username);
}
