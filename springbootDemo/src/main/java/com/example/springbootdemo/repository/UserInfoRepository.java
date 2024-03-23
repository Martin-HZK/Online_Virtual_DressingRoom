package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.UserInfo;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

/**
 * The UserInfoRepository class to handle the database operation
 * @author Zhikai Hu
 */
@Repository
public interface UserInfoRepository extends MongoRepository<UserInfo, ObjectId> {
    /**
     * This method is used to find user information by username
     * @param username username
     * @return user information
     */
    Optional<UserInfo> findUserInfoByUsername(String username);
}
