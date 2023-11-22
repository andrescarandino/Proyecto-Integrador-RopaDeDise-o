package com.camada2.WearStore.config.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Component
public class JwtUtils {

    @Value("${jwt.secretKey}")
    private String secretKey;

    @Value("${jwt.timeExpiration}")
    private String timeExpiration;

    //Generar Token
    public String accessTokenGenerator(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + Long.parseLong(timeExpiration)))
                .signWith(signatureKeyGen(), SignatureAlgorithm.HS256)
                .compact();
    }

    //Validacion token acceso
    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                    .setSigningKey(signatureKeyGen())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    //Obtener username del token
    public String userNameFromToken(String token){
        return getClaim(token, Claims::getSubject);
    }

    //Obtener 1 solo Claim
    public <T> T getClaim(String token, Function<Claims, T> claimsFunction) {
        Claims claims = extractClaims(token);
        return claimsFunction.apply(claims);
    }

    //Obtener claims del token (info dentro del token)
    public Claims extractClaims(String token){
        return Jwts.parser()
                .setSigningKey(signatureKeyGen())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    //Obtener firma de token
    public Key signatureKeyGen() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);

        return Keys.hmacShaKeyFor(keyBytes);
    }

}
