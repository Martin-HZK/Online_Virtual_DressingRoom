package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * The ReviewRepository class to handle the database operation
 */
@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
}
