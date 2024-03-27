package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The UserInfoService class to handle the business logic
 * @author Zhikai Hu
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
     * @param username the username
     * @param password the password
     * @return boolean variable to indicate if the user can successfully log in
     */
    public boolean checkLogin(String username, String password) {
        UserInfo userInfo = userInfoRepository.findUserInfoByUsername(username).orElse(null);
        if (userInfo == null) {
            return false;
        } else {
            return userInfo.getPassword().equals(password);
        }
    }

    /**
     * The method to check if the user can successfully sign up
     * @param username the username
     * @param password the password
     * @return boolean variable to indicate if the user can successfully sign up
     */
    public boolean checkSignUp(String username, String password) {
        UserInfo userInfo = userInfoRepository.findUserInfoByUsername(username).orElse(null);
        if (userInfo == null) {
            UserInfo newUserInfo = new UserInfo();
            newUserInfo.setUsername(username);
            newUserInfo.setPassword(password);
            userInfoRepository.save(newUserInfo);
            return true;
        } else {
            return false;
        }
    }
}
