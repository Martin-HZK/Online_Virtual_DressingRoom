package com.example.springbootdemo;

import com.example.springbootdemo.repository.UserInfoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserInfoService.class)
public class UserInfoServiceTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserInfoService userInfoService;

//    @Test
//    void shouldReturnSuccessUserLogin() throws Exception {
//        when(userInfoService.checkLogin("admin", "admin")).thenReturn(true);
//        this.mockMvc.perform(post("/api/v1/login")
//                .contentType("application/json")
//                .content("{\"username\":\"admin\",\"password\":\"admin\"}"))
//                .andExpect(content().string("true"));
//    }
}
