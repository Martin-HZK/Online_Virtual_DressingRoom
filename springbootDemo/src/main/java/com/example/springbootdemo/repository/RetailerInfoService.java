package com.example.springbootdemo.repository;

import com.example.springbootdemo.model.Clothes;
import com.example.springbootdemo.model.RetailerInfo;
import com.example.springbootdemo.model.UserInfo;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
public class RetailerInfoService {
    @Autowired
    private RetailerInfoRepository retailerInfoRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
    public boolean checkLogin(String username, String password) {
        RetailerInfo retailerInfo = retailerInfoRepository.findRetailerInfoByUsername(username).orElse(null);
        if (retailerInfo == null) {
            return false;
        } else {
            return retailerInfo.getPassword().equals(password);
        }
    }

    public List<RetailerInfo> allClothes() {
        return retailerInfoRepository.findAll();
    }

    public void updateRetailerClothes(String retailer_name, String clothes_name, String adsImagesString) {
//        mongoTemplate.update(RetailerInfo.class)
//                .matching(query(where("username").is(retailer_name)))
//                .apply(new Update().push("clothes", new Clothes(clothes_name, adsImagesString)))
//                .first();

        Query query = new Query(Criteria.where("username").is(retailer_name));

        // 检查 clothesName 和 clothesURL 是否为空
        if (!StringUtils.isEmpty(clothes_name) && !StringUtils.isEmpty(adsImagesString)) {
            // 构建更新操作
            Update update = new Update().set("clothes." + clothes_name, adsImagesString);
            // 执行更新操作
            mongoTemplate.updateFirst(query, update, RetailerInfo.class);
        }
    }


//    /**
//     * Add clothes to the database
//     * Hint: the retailer name should be passed in by the user
//     * @param clothes_name
//     * @param retailer_name
//     * @param description
//     * @param category
//     * @param brand
//     * @return
//     */
//    public boolean addClothes(String clothes_name, String retailer_name, String description, String category, String brand) {
//
//        Clothes clothes = new Clothes(clothes_name, retailer_name, description, category, brand);
//    }
}
