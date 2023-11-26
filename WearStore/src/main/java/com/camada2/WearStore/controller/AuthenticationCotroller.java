package com.camada2.WearStore.controller;


import com.camada2.WearStore.Dto.AuthenticationRequest;
import com.camada2.WearStore.Dto.AuthenticationResponse;
import com.camada2.WearStore.service.impl.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@NoC
@RequestMapping(value = "/login", consumes = {MediaType.APPLICATION_JSON_VALUE})
public class AuthenticationCotroller {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<AuthenticationResponse> login(@RequestBody @Valid AuthenticationRequest authRequest){

        AuthenticationResponse jwtDto = authenticationService.login(authRequest);

        return ResponseEntity.ok(jwtDto);

    }

}
