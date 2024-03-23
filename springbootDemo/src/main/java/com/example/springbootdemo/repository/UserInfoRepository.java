package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.UserInfo;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

/**
 * The UserInfoRepository class to handle the database operation
 */
@Repository
public interface UserInfoRepository extends MongoRepository<UserInfo, ObjectId> {
    Optional<UserInfo> findUserInfoByUsername(String username);
}
