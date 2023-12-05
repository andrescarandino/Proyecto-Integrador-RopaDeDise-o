package com.camada2.WearStore.config.Security;

import com.camada2.WearStore.Dto.DtoAuthRespuesta;
import com.camada2.WearStore.Dto.DtoLogin;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    UsuariosRepository usuariosRepository;

    @Autowired
    JwtGenerator jwtGenerator;

    public DtoAuthRespuesta login(DtoLogin request) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getEmail(), request.getPassword()));
        Usuarios usuarios = usuariosRepository.findUsuariosByEmail(request.getEmail()).orElseThrow();

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtGenerator.generarToken(authentication, jwtGenerator.extraClaims(usuarios));
        return new DtoAuthRespuesta(token);

    }
}
