package com.example.springbootdemo.controller;

import com.example.springbootdemo.model.Review;
import com.example.springbootdemo.repository.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/reviews") // endpoint depends on the user preference
public class ReviewController {
     @Autowired
    private ReviewService reviewService;

    /**
     * What we get as the request body
     * The name of the key should be the same as the POST request body and vice versa
     * @param payload
     * @return
     */
     @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.CREATED);// send201
    }
}
