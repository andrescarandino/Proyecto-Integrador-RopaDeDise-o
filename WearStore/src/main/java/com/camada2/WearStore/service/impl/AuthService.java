package com.camada2.WearStore.service.impl;


import com.camada2.WearStore.auth.AuthResponse;
import com.camada2.WearStore.auth.LoginRequest;
import com.camada2.WearStore.config.jwt.JwtService;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    UsuariosRepository usuariosRepository;

    @Autowired
    JwtService jwtService;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        Usuarios usuarios = usuariosRepository.findUsuariosByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.getToken(usuarios);
        return AuthResponse.builder()
                .token(token)
                .build();

    }
}
