package com.camada2.WearStore.config;

import com.camada2.WearStore.config.jwt.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;



@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private AuthenticationProvider authProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .cors(cors -> cors.disable())
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests((authRequest) ->
                        authRequest.requestMatchers("/login").permitAll()
                                .requestMatchers(HttpMethod.POST,"/usuarios").permitAll()
                                .requestMatchers(HttpMethod.GET,"/usuarios").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET,"/usuarios/{id}").hasAnyRole("USER","ADMIN")
                                .requestMatchers(HttpMethod.GET,"/usuarios/buscar").hasAnyRole("USER","ADMIN")
                                .requestMatchers(HttpMethod.PUT,"/usuarios/**").hasAnyRole("USER","ADMIN")
                                .requestMatchers(HttpMethod.DELETE,"/usuarios/**").hasAnyRole("USER","ADMIN")
                                .requestMatchers(HttpMethod.POST,"/productos/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT,"/productos/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE,"/productos/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET,"/productos/**").permitAll()
                                .requestMatchers(HttpMethod.POST,"/img/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT,"/img/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE,"/img/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET,"/img/**").permitAll()
                                .requestMatchers(HttpMethod.POST,"/categorias/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT,"/categorias/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE,"/categorias/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET,"/categorias/**").permitAll()
                                .requestMatchers(HttpMethod.POST,"/caracteristicas/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT,"/caracteristicas/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE,"/caracteristicas/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET,"/caracteristicas/**").permitAll()
                                //.anyRequest().authenticated()
                )
                .sessionManagement(sessionManager -> sessionManager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }


}
