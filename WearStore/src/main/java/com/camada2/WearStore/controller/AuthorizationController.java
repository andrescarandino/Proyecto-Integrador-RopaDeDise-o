package com.camada2.WearStore.controller;

import com.camada2.WearStore.auth.AuthResponse;
import com.camada2.WearStore.auth.LoginRequest;
import com.camada2.WearStore.repository.UsuariosRepository;
import com.camada2.WearStore.service.impl.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AuthorizationController {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Autowired
    private AuthService authService;

    @PostMapping
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request){

        return ResponseEntity.ok(new AuthResponse(authService.login(request)));
    }


}