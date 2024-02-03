package com.example.springbootdemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @RequestMapping
    public String helloWorld() {
        return "Hello World from spring boot!";
    }

    @RequestMapping("/goodbye")
    public String goodbye() {
        return "Goodbye from spring boot!";
    }

    @RequestMapping("/dressingRoom")
    public String dressingRoom() {
        int[] a = new int[2];
//        int b = a.
        return "Welcome to the dressing room!";
    }
}
