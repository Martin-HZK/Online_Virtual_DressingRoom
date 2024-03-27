package com.example.springbootdemo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SpringbootDemoApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void shouldReturnSuccessUserLogin() throws Exception {
		this.mockMvc.perform(post("/api/v1/login")
				.contentType("application/json")
				.content("{\"username\":\"admin\",\"password\":\"admin\"}"))
				.andExpect(status().isCreated());
	}




	@Test
	void contextLoads() {
	}

}
