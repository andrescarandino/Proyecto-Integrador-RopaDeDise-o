package com.camada2.WearStore.controller;


import com.camada2.WearStore.Dto.DtoAuthRespuesta;
import com.camada2.WearStore.Dto.DtoLogin;
import com.camada2.WearStore.config.Security.AuthService;
import com.camada2.WearStore.repository.UsuariosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class AuthorizationController {

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Autowired
    AuthService authService;


    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping
    public ResponseEntity<DtoAuthRespuesta> login(@RequestBody DtoLogin request){

        return ResponseEntity.ok(authService.login(request));
    }


}
