package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.RetailerInfo;
import com.example.springbootdemo.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RetailerInfoService {
    @Autowired
    private RetailerInfoRepository retailerInfoRepository;

    public boolean checkLogin(String username, String password) {
        RetailerInfo retailerInfo = retailerInfoRepository.findRetailerInfoByUsername(username).orElse(null);
        if (retailerInfo == null) {
            return false;
        } else {
            return retailerInfo.getPassword().equals(password);
        }
    }
}
