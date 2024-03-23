package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The UserInfoService class to handle the business logic
 */
@Service
public class UserInfoService {

    /**
     * The UserInfoRepository class to handle the database operation
     */
    @Autowired
    private UserInfoRepository userInfoRepository;

    /**
     * The method to check if the user can successfully log in
     * @param username
     * @param password
     * @return
     */
    public boolean checkLogin(String username, String password) {
        UserInfo userInfo = userInfoRepository.findUserInfoByUsername(username).orElse(null);
        if (userInfo == null) {
            return false;
        } else {
            return userInfo.getPassword().equals(password);
        }
    }
}
