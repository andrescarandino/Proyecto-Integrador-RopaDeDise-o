package com.camada2.WearStore.config.Security;

import com.camada2.WearStore.entity.Usuarios;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class JwtGenerator {

    @Value("${jwt.timeExpiration}")
    long JWT_EXPIRATION_TOKEN;

    @Value("${jwt.secretKey}")
    String JWT_FIRMA;
    public String generarToken(Authentication authentication, Map<String, Object> extraClaims) {

    String username = authentication.getName();

    Date tiempoActual = new Date();

    Date expiracionToken = new Date(tiempoActual.getTime() + JWT_EXPIRATION_TOKEN);


    String token = Jwts.builder()
            .setClaims(extraClaims)
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(expiracionToken)
            .signWith(SignatureAlgorithm.HS256, JWT_FIRMA)
            .compact();
        return token;
}


    public String obtenerUsernameDeJwt(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_FIRMA)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }


    public Boolean validarToken(String token) {
        try {

            Jwts.parser().setSigningKey(JWT_FIRMA).build().parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            throw new AuthenticationCredentialsNotFoundException("Jwt ah expirado o esta incorrecto");
        }
    }

    public <T> T getClaims(String token, Function<Claims, T> claimsResolver){

        final Claims claims = getAllClaims(token);
        return claimsResolver.apply(claims);

    }

    private Claims getAllClaims(String token){

        return Jwts.parser()
                .setSigningKey(JWT_FIRMA)
                .build()
                .parseClaimsJws(token)
                .getBody();

    }

    private Date getExpiration(String token){
        return getClaims(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }

    public Map<String, Object> extraClaims(Usuarios usuario) {

        List<?> rol = usuario.getRoles().stream()
                .map(roles -> usuario.getRoles()).collect(Collectors.toList());

        Map<String, Object> extraClaims = new HashMap();
        extraClaims.put("id", usuario.getIdUsuarios());
        extraClaims.put("rol", rol);

        return extraClaims;

    }
}
