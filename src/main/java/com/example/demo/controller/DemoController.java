package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@RestController
public class DemoController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/demo")
    public ResponseEntity<User> getUser() throws Exception {

        Optional<User> userObtenido = userRepository.findById(Long.valueOf(1));

        return new ResponseEntity<>(userObtenido.get(), HttpStatus.OK);

    }

}
