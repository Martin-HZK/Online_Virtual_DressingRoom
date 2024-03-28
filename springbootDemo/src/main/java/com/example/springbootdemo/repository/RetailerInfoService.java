package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.RetailerInfo;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

/**
 * The RetailerInfoService class to handle the business logic
 * @author Zhikai Hu
 */
@Service
public class RetailerInfoService {
    /**
     * The retailerInfoRepository is used to store the retailer information to the database
     */
    @Autowired
    private RetailerInfoRepository retailerInfoRepository;

    /**
     * Template is another way to access the database other than repository
     * This is for forming a dynamic query to do job in the database without using repository
     */
    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * The method to check if the retailer can successfully log in
     * @param username the username of the retailer
     * @param password the password of the retailer
     * @return boolean variable to indicate if the retailer can successfully log in
     */
    public boolean checkLogin(String username, String password) {
        RetailerInfo retailerInfo = retailerInfoRepository.findRetailerInfoByUsername(username).orElse(null);
        if (retailerInfo == null) {
            return false;
        } else {
            return retailerInfo.getPassword().equals(password);
        }
    }

    /**
     * The method to check if the retailer can successfully sign up
     * @param username the username of the retailer
     * @param password the password of the retailer
     * @return boolean variable to indicate if the retailer can successfully sign up
     */
    public boolean checkSignUp(String username, String password) {
        RetailerInfo retailerInfo = retailerInfoRepository.findRetailerInfoByUsername(username).orElse(null);
        if (retailerInfo == null) {
            RetailerInfo newRetailerInfo = new RetailerInfo();
            newRetailerInfo.setUsername(username);
            newRetailerInfo.setPassword(password);
//            newRetailerInfo.setClothes(new HashMap<>());
            retailerInfoRepository.save(newRetailerInfo);
            return true;
        } else {
            return false;
        }
    }

    /**
     * The method to update the retailer's clothes
     * @param retailer_name the name of the retailer
     * @param clothes_name the name of the clothes
     * @param adsImagesString the source path of the clothes
     */
    public void updateRetailerClothes(String retailer_name, String clothes_name, String adsImagesString) {

        Query query = new Query(Criteria.where("username").is(retailer_name));
        if (!StringUtils.isEmpty(clothes_name) && !StringUtils.isEmpty(adsImagesString)) {
            Update update = new Update().set("clothes." + clothes_name, adsImagesString);
            mongoTemplate.updateFirst(query, update, RetailerInfo.class);
        }
    }

    /**
     * The method to edit the retailer's profile
     * @param originalUsername the original username of the retailer
     * @param username the new username of the retailer
     * @param password the new password of the retailer
     * @return boolean variable to indicate if the retailer can successfully edit the profile
     */
    public boolean editProfile(String originalUsername, String username, String password) {
        RetailerInfo retailerInfo = retailerInfoRepository.findRetailerInfoByUsername(originalUsername).orElse(null);
        if (retailerInfo == null) {
            return false;
        } else {
            retailerInfo.setUsername(username);
            retailerInfo.setPassword(password);
            retailerInfoRepository.save(retailerInfo);
            return true;
        }
    }

    /**
     * The method to get the number of retailer's clothes
     * @param retailer_name the name of the retailer
     * @return the clothes of the retailer
     */
    public Integer getItemNumber(String retailer_name) {
        RetailerInfo retailerInfo = retailerInfoRepository.findRetailerInfoByUsername(retailer_name).orElse(null);
        if (retailerInfo == null) {
            return 0;
        } else {
            return retailerInfo.getClothes().size();
        }
    }

}
