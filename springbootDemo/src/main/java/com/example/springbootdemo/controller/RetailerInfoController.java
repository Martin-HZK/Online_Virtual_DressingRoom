package com.example.springbootdemo.controller;


import com.example.springbootdemo.repository.RetailerInfoService;
import com.example.springbootdemo.repository.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/retailer/login")
public class RetailerInfoController {

    @Autowired
    private RetailerInfoService retailerInfoService;

    @PostMapping
    public ResponseEntity<Boolean> login(@RequestBody Map<String, String> loginInfo) {
        return new ResponseEntity<Boolean>(retailerInfoService.checkLogin(loginInfo.get("username"), loginInfo.get("password")), HttpStatus.CREATED);// send201

    }

}
