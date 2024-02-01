package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Movie;
import com.example.springbootdemo.model.UserInfo;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoRepository extends MongoRepository<UserInfo, ObjectId> {
    Optional<UserInfo> findUserInfoByUsername(String username);
}
