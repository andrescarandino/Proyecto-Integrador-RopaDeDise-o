package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.Dto.AuthenticationRequest;
import com.camada2.WearStore.Dto.AuthenticationResponse;
import com.camada2.WearStore.entity.Roles;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.relation.Role;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    UsuariosRepository usuariosRepository;

    @Autowired
    JwtService jwtService;

    public AuthenticationResponse login(AuthenticationRequest authRequest){

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                authRequest.getUsername(), authRequest.getPassword()
        );

        authenticationManager.authenticate(authToken);

        Usuarios usuario = usuariosRepository.findUsuariosByEmail(authRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("No se encontro el usuario") );


        String jwt = jwtService.generateToken(usuario, generateExtraClaims(usuario));

        return new AuthenticationResponse(jwt);

    }

    private Map<String, Object> generateExtraClaims(Usuarios usuario) {

        List<?> rol = usuario.getRoles().stream()
                .map(roles -> usuario.getRoles()).collect(Collectors.toList());

        Map<String, Object> extraClaims = new HashMap();
        extraClaims.put("usuario", usuario.getEmail());
        extraClaims.put("rol", rol);

        return extraClaims;

    }

}
