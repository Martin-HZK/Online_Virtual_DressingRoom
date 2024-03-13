package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.RetailerInfo;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RetailerInfoRepository extends MongoRepository<RetailerInfo, ObjectId> {
    Optional<RetailerInfo> findRetailerInfoByUsername(String username);
}
