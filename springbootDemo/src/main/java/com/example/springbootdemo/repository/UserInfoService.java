package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserInfoService {
    @Autowired
    private UserInfoRepository userInfoRepository;

    public boolean checkLogin(String username, String password) {
        UserInfo userInfo = userInfoRepository.findUserInfoByUsername(username).orElse(null);
        if (userInfo == null) {
            return false;
        } else {
            return userInfo.getPassword().equals(password);
        }
    }
}
