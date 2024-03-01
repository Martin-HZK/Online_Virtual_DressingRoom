package com.example.springbootdemo.controller;
import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.repository.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(("api/v1"))
public class UploadImageController {

    @Autowired
    private ClothesService clothesService;

    @PostMapping("/clothes")
    public ResponseEntity<Clothes> createAd(@RequestParam("file") MultipartFile adsImages, @RequestParam("goodName") String name, @RequestParam("description") String description, @RequestParam("category") String category, @RequestParam("brand") String brand) {
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
        return new ResponseEntity<Clothes>(clothesService.createClothes(name, adsImagesString, description,category,brand), HttpStatus.CREATED);
    }

    @GetMapping("/getAllClothes")
    public ResponseEntity<List<Clothes>> getAllClothes() {
        return new ResponseEntity<List<Clothes>>(clothesService.allClothes(), HttpStatus.OK);
    }
}
