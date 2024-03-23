package com.example.springbootdemo.controller;


import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.model.RetailerInfo;
import com.example.springbootdemo.repository.ClothesService;
import com.example.springbootdemo.repository.RetailerInfoService;
import com.example.springbootdemo.repository.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/retailer")
public class RetailerInfoController {

    @Autowired
    private RetailerInfoService retailerInfoService;
    @Autowired
    private ClothesService clothesService;

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Map<String, String> loginInfo) {
        return new ResponseEntity<Boolean>(retailerInfoService.checkLogin(loginInfo.get("username"), loginInfo.get("password")), HttpStatus.CREATED);// send201
    }

    @PostMapping("/upload_clothes")
    public ResponseEntity<Clothes> createAd(@RequestParam("file") MultipartFile adsImages, @RequestParam("retailer_name") String retailer_name, @RequestParam("goodName") String name, @RequestParam("description") String description, @RequestParam("category") String category, @RequestParam("brand") String brand) {
        String uploadDirectory = "src/main/resources/static/clothes/";
        String adsImagesString = "";

        try {
            adsImagesString += clothesService.saveImageToStorage(uploadDirectory, adsImages) + ",";
            System.out.println(adsImagesString);
        } catch (IOException e) {
            e.printStackTrace();
        }


        adsImagesString = uploadDirectory + adsImagesString;

        retailerInfoService.updateRetailerClothes(retailer_name, name, adsImagesString);

        // Save the adsImagesString in your database
        // You can also associate it with other data in your Ads object
        return new ResponseEntity<Clothes>(clothesService.createClothes(name, retailer_name, adsImagesString, description,category,brand), HttpStatus.CREATED);
    }

//    @GetMapping("/getAllClothes")
//    public ResponseEntity<List<RetailerInfo>> getAllRetailerClothes(String retailerName) {
//        return new ResponseEntity<List<RetailerInfo>>(retailerInfoService.allClothes(retailerName), HttpStatus.OK);
//    }

}
