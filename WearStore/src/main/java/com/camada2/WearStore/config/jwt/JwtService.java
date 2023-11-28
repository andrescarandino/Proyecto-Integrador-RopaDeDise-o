package com.camada2.WearStore.config.jwt;

import com.camada2.WearStore.entity.Usuarios;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class JwtService {

    @Value("${jwt.secretKey}")
    private String secretKey;
    public String getToken(Usuarios usuarios) {

        return getToken(extraClaims(usuarios), usuarios);

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

    public String getUsernameFromToken(String token) {

        return getClaims(token, Claims::getSubject);

    }

    public boolean isTokenValid(String token, UserDetails userDetails) {

        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));

    }

    private Claims getAllClaims(String token){

            return Jwts.parser()
                    .setSigningKey(getKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

    }

    public <T> T getClaims(String token, Function<Claims, T> claimsResolver){

        final Claims claims = getAllClaims(token);
        return claimsResolver.apply(claims);

    }

    private Date getExpiration(String token){
        return getClaims(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }

    private Map<String, Object> extraClaims(Usuarios usuario) {

        List<?> rol = usuario.getRoles().stream()
                .map(roles -> usuario.getRoles()).collect(Collectors.toList());

        Map<String, Object> extraClaims = new HashMap();
        extraClaims.put("id", usuario.getIdUsuarios());
        extraClaims.put("rol", rol);

        return extraClaims;

    }

}
