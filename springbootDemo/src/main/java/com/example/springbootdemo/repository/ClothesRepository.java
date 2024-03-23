package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Clothes;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;


/**
 * This interface is used to interact with the database to store and retrieve clothes information
 * @author Zhikai Hu
 */
@Repository
public interface ClothesRepository extends MongoRepository<Clothes, ObjectId> {
    /**
     * This method is used to find clothes by retailer name
     * @param retailerName the name of the retailer
     * @return a list of clothes
     */
    List<Optional<Clothes>> findClothesByRetailerName(String retailerName);
}