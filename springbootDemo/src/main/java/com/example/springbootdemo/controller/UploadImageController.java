package com.example.springbootdemo.controller;

import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.repository.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

/**
 * The UploadImageController class to deal with the request to get all clothes
 * (The upload clothes are set in the retailerInfoController)
 * @author Zhikai Hu
 */
@CrossOrigin
@RestController
@RequestMapping(("api/v1"))
public class UploadImageController {

    /**
     * The ClothesService class to handle the business logic
     */
    @Autowired
    private ClothesService clothesService;

    /**
     * The GetMapping to get all clothes
     * @return the list of clothes
     */
    @GetMapping("/getAllClothes")
    public ResponseEntity<List<Clothes>> getAllClothes() {
        return new ResponseEntity<List<Clothes>>(clothesService.allClothes(), HttpStatus.OK);
    }

    /**
     * The GetMapping to get all clothes for certain retailer
     * @param retailer_name name of the retailer
     * @return the list of clothes for certain retailer
     */
    @GetMapping("/getAllClothesByRetailer/{retailer_name}")
    public ResponseEntity<List<Optional<Clothes>>> getAllClothesByRetailer(@PathVariable String retailer_name) {
        return new ResponseEntity<List<Optional<Clothes>>>(clothesService.allClothesByCertainRetailer(retailer_name), HttpStatus.OK);
    }
}
