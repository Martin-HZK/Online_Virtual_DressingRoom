package com.example.springbootdemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import java.util.List;

/**
 * Represents a movie information including imdbId, title, releaseDate, trailerLink, poster, genres, backdrops, and reviewIds.
 * @author Zhikai Hu
 */
@Document(collection = "clothes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    /**
     * We do not want to expose the id to the client. We would prefer imdbId to be the url
     */
    @Id
    private ObjectId id;

    /**
     * imdbId of the movie
     */
    private String imdbId;

    /**
     * The title of the movie
     */
    private String title;

    /**
     * The release date of the movie
     */
    private String releaseDate;

    /**
     * The trailer link of the movie
     */
    private String trailerLink;

    /**
     * The poster of the movie
     */
    private String poster;

    /**
     * The genres of the movie
     */
    private List<String> genres;

    /**
     * The backdrops of the movie
     */
    private List<String> backdrops;

    /**
     * The list of review ids of the movie
     */
    @DocumentReference
    private List<Review> reviewIds;

}
