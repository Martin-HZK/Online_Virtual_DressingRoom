package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId>{

    /**
     * This method is used to find a movie by its imdbId instead of id in the database
     * This can protect the id of the movie from being exposed to the client
     * This imdbId is required to be unique
     * @param imdbId
     * @return
     */
    Optional<Movie> findMovieByImdbId(String imdbId);
}
