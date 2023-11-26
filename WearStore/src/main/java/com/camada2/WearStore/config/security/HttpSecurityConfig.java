package com.camada2.WearStore.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class HttpSecurityConfig {

    @Autowired
    AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrfConfig -> csrfConfig.disable())
                .sessionManagement(sessionManagementConfig -> sessionManagementConfig.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .authorizeHttpRequests(authConfig -> {
                    authConfig.requestMatchers(HttpMethod.POST, "/login").permitAll();
                    authConfig.requestMatchers(HttpMethod.GET, "/**").permitAll();
                    authConfig.requestMatchers("/error").permitAll();

                    authConfig.requestMatchers(HttpMethod.GET,"/productos").hasAnyRole("USER","ADMIN");

                    authConfig.anyRequest().hasRole("ADMIN");

                });


        return http.build();
    }

}
