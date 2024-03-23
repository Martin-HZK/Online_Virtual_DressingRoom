package com.example.springbootdemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The HelloWorldController class to handle the request from the client
 * @author Zhikai Hu
 */
@RestController
public class HelloWorldController {

    /**
     * The method to return a string
     * @return a string
     */
    @RequestMapping
    public String helloWorld() {
        return "Hello World from spring boot!";
    }

    /**
     * Goodbye method
     * @return a string
     */
    @RequestMapping("/goodbye")
    public String goodbye() {
        return "Goodbye from spring boot!";
    }

    /**
     * Dressing room method
     * @return a string
     */
    @RequestMapping("/dressingRoom")
    public String dressingRoom() {
        int[] a = new int[2];

        return "Welcome to the dressing room!";
    }
}
