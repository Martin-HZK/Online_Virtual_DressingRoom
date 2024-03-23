package com.example.springbootdemo.controller;

import com.example.springbootdemo.model.Movie;
import com.example.springbootdemo.repository.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

/**
 * This class is used to handle the control of the endpoint
 * @author Zhikai Hu
 */
@RestController
@CrossOrigin
@RequestMapping("/api/v1/movies")
public class MovieController { // different from the HelloWorldController, which deals with the control of the endpoint

    /**
     * The MovieService class to handle the business logic
     */
    @Autowired
    private MovieService movieService;

    /**
     * Get all movies
     * @return list of all movies
     */
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    /**
     * Get all movies by certain genre
     * @param imdbId ID of the movie
     * @return list of movies by certain genre
     */
    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId) {
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId), HttpStatus.OK);
    }

}
