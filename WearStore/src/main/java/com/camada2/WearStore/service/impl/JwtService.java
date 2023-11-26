package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.Usuarios;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {

    @Value("${jwt.timeExpiration}")
    private Integer expired;
    @Value("${jwt.secretKey}")
    private String secret;

    public String generateToken(Usuarios usuario, Map<String, Object> extraClaims) {

       return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(usuario.getEmail())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+expired))
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .signWith(generateKey(),SignatureAlgorithm.HS256)
                .compact();

    }

    private Key generateKey() {

        byte[] secretKey = Decoders.BASE64.decode(secret);

        return Keys.hmacShaKeyFor(secretKey);
    }
}
