package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.model.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ClothesRepository extends MongoRepository<Clothes, ObjectId> {
    List<Optional<Clothes>> findClothesByRetailerName(String retailerName);
}