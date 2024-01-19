package com.example.springbootdemo;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController { // different from the HelloWorldController, which deals with the control of the endpoint
    @GetMapping
    public ResponseEntity<String> getAllMovies() {
        return new ResponseEntity<String>("All Movies", HttpStatus.OK);
    }
}
