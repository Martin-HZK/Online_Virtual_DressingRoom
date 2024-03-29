package com.example.springbootdemo.controller;

import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.repository.ClothesService;
import com.example.springbootdemo.repository.RetailerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

/**
 * The RetailerInfoController class to handle the retailer request to log in and upload clothes
 * @author Zhikai Hu
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
     * @param loginInfo the username and password mapping
     * @return boolean variable to indicate if the retailer can successfully log in
     */
    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Map<String, String> loginInfo) {
        return new ResponseEntity<Boolean>(retailerInfoService.checkLogin(loginInfo.get("username"), loginInfo.get("password")), HttpStatus.CREATED);// send201
    }

    /**
     * The PostMapping to check if the retailer can successfully register
     * @param signUpInfo the username and password mapping
     * @return boolean variable to indicate if the retailer can successfully register
     */
    @PostMapping("/signup")
    public ResponseEntity<Boolean> signup(@RequestBody Map<String, String> signUpInfo) {
        return new ResponseEntity<Boolean>(retailerInfoService.checkSignUp(signUpInfo.get("username"), signUpInfo.get("password")), HttpStatus.CREATED);
    }

    @PostMapping("/edit_profile")
    public ResponseEntity<Boolean> editProfile(@RequestBody Map<String, String> editInfo) {
        return new ResponseEntity<Boolean>(retailerInfoService.editProfile(editInfo.get("originalUsername"), editInfo.get("username"), editInfo.get("password")), HttpStatus.CREATED);
    }

    /**
     * The PostMapping to check if the retailer can successfully register
     * @param adsImages the image of the clothes
     * @param retailer_name the name of the retailer
     * @param name the name of the clothes
     * @param description the description of the clothes
     * @param category the category of the clothes
     * @param brand the brand of the clothes
     * @return updated clothes
     */
    @PostMapping("/upload_clothes")
    public ResponseEntity<Clothes> createAd(@RequestParam("file") MultipartFile adsImages, @RequestParam("retailer_name") String retailer_name, @RequestParam("goodName") String name, @RequestParam("clothes_ID") String clothes_ID, @RequestParam("description") String description, @RequestParam("category") String category, @RequestParam("brand") String brand, @RequestParam("price") int price, @RequestParam("gender") String gender) {
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
        return new ResponseEntity<Clothes>(clothesService.createClothes(name, clothes_ID, retailer_name, adsImagesString, description ,category, brand, price, gender), HttpStatus.CREATED);
    }

    /**
     * The GetMapping to get the number of items of a retailer
     * @param retailer_name the name of the retailer
     * @return the number of items of the retailer
     */
    @GetMapping("/get_item_number/{retailer_name}")
    public ResponseEntity<Integer> getItemNumber(@PathVariable String retailer_name) {
        return new ResponseEntity<Integer>(retailerInfoService.getItemNumber(retailer_name), HttpStatus.CREATED);
    }


}
