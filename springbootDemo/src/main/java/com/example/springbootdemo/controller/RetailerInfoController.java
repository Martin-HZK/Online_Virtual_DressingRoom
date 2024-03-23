package com.example.springbootdemo.controller;

import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.repository.ClothesService;
import com.example.springbootdemo.repository.RetailerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

/**
 * The RetailerInfoController class to handle the retailer request to login and upload clothes
 */
@RestController
@CrossOrigin
@RequestMapping("/api/v1/retailer")
public class RetailerInfoController {
    /**
     * The RetailerInfoService class to handle the business logic
     */
    @Autowired
    private RetailerInfoService retailerInfoService;

    /**
     * The ClothesService class to handle the business logic
     */
    @Autowired
    private ClothesService clothesService;

    /**
     * The PostMapping to check if the retailer can successfully log in
     * @param loginInfo
     * @return ResponseEntity<Boolean>
     */
    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Map<String, String> loginInfo) {
        return new ResponseEntity<Boolean>(retailerInfoService.checkLogin(loginInfo.get("username"), loginInfo.get("password")), HttpStatus.CREATED);// send201
    }

    /**
     * The PostMapping to check if the retailer can successfully register
     * @param adsImages
     * @param retailer_name
     * @param name
     * @param description
     * @param category
     * @param brand
     * @return ResponseEntity<Clothes>
     */
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

}
