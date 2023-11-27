package com.camada2.WearStore.config.jwt;

import com.camada2.WearStore.entity.Usuarios;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtService {

    @Value("${jwt.secretKey}")
    private String secretKey;
    public String getToken(UserDetails usuarios) {

        return getToken(new HashMap<>(), usuarios);

    }

    private String getToken(Map<String, Object> extraClaims, UserDetails usuarios) {

        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(usuarios.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();


    }

    private Key getKey() {

        byte[] keyBytes = Decoders.BASE64.decode(secretKey);

        return Keys.hmacShaKeyFor(keyBytes);

    }
}
