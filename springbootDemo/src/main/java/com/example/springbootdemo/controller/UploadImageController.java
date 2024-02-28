package com.example.springbootdemo.controller;
import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.repository.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@RestController
@RequestMapping(("api/v1/upload_goods"))
public class UploadImageController {

    @Autowired
    private ClothesService clothesService;

    @PostMapping
    public ResponseEntity<Clothes> createAd(@RequestParam("file") MultipartFile adsImages) {
        String uploadDirectory = "src/main/resources/static/clothes/";
        String adsImagesString = "";

//        for (MultipartFile imageFile : adsImages) {
            try {
                adsImagesString += clothesService.saveImageToStorage(uploadDirectory, adsImages) + ",";
                System.out.println(adsImagesString);
            } catch (IOException e) {
                e.printStackTrace();
            }

            adsImagesString = uploadDirectory + adsImagesString;
//        }

        // Save the adsImagesString in your database
        // You can also associate it with other data in your Ads object

        return new ResponseEntity<Clothes>(clothesService.createClothes("clothes name", adsImagesString), HttpStatus.CREATED);


    }
}
