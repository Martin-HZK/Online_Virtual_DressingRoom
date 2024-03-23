package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * The MovieService class to handle the business logic
 * @author Zhikai Hu
 */
@Service
public class MovieService {

    /**
     * The MovieRepository class to handle the database operation
     */
    @Autowired
    private MovieRepository movieRepository;

    // data access method
    /**
     * The method to get all movies
     * @return the list of movies
     */
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    /**
     * The method to get a single movie by its imdbId
     * @param imdbId the imdbId of the movie
     * @return the movie by its imdbId
     */
    public Optional<Movie> singleMovie(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
