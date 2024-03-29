package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Clothes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * The ClothesService class to handle the business logic
 * @author Zhikai Hu
 */
@Service
public class ClothesService {

    /**
     * The ClothesRepository class to handle the database operation
     */
    @Autowired
    private ClothesRepository clothesRepository;

    /**
     * The method to get all clothes
     * @return list of all clothes
     */
    public List<Clothes> allClothes() {
        return clothesRepository.findAll();
    }

    /**
     * The method to get all clothes for certain retailer
     * @param retailer_name name of the retailer
     * @return list of clothes for certain retailer
     */
    public List<Optional<Clothes>> allClothesByCertainRetailer(String retailer_name) {
        return clothesRepository.findClothesByRetailerName(retailer_name);
    }

    /**
     * This is the method to store an image to the local machine
     * @param uploadDirectory the directory to store the image
     * @param imageFile the image file
     * @return the unique file name
     * @throws IOException
     */
    public String saveImageToStorage(String uploadDirectory, MultipartFile imageFile) throws IOException {
        String uniqueFileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();

        Path uploadPath = Path.of(uploadDirectory);
        Path filePath = uploadPath.resolve(uniqueFileName);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return uniqueFileName;
    }

    // To view an image
    public byte[] getImage(String imageDirectory, String imageName) throws IOException {
        Path imagePath = Path.of(imageDirectory, imageName);

        if (Files.exists(imagePath)) {
            byte[] imageBytes = Files.readAllBytes(imagePath);
            return imageBytes;
        } else {
            return null; // Handle missing images
        }
    }

    // Delete an image
    public String deleteImage(String imageDirectory, String imageName) throws IOException {
        Path imagePath = Path.of(imageDirectory, imageName);

        if (Files.exists(imagePath)) {
            Files.delete(imagePath);
            return  "Success";
        } else {
            return "Failed"; // Handle missing images
        }
    }


    /**
     * The method to create a Clothes object
     * @param clothes_name the name of the clothes
     * @param retailer_name the name of the retailer
     * @param link the link to the clothes
     * @param description the description of the clothes
     * @param category the category of the clothes
     * @param brand the brand of the clothes
     * @return Clothes
     */
    public Clothes createClothes(String clothes_name, String clothes_ID, String retailer_name, String link, String description, String category, String brand, int price, String gender) {
        Clothes clothes = new Clothes(clothes_name, clothes_ID, retailer_name, link, description, category, brand, price, gender);
        clothesRepository.save(clothes);
        return clothes;
    }


}