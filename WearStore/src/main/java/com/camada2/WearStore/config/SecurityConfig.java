package com.camada2.WearStore.config;


import com.camada2.WearStore.config.filters.JwtAuthFilter;
import com.camada2.WearStore.config.filters.JwtAuthenticationFilter;
import com.camada2.WearStore.config.jwt.JwtUtils;
import com.camada2.WearStore.service.impl.UsuarioServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    JwtAuthFilter authorizationFilter;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, AuthenticationManager authenticationManager) throws Exception {

        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(jwtUtils);
        jwtAuthenticationFilter.setAuthenticationManager(authenticationManager);
        jwtAuthenticationFilter.setFilterProcessesUrl("/login");

        return httpSecurity
                .csrf(config -> config.disable())
                .authorizeHttpRequests(auth -> { //comportamiento de acceso a los endpoints
                    auth.requestMatchers("GET").permitAll();
                    auth.anyRequest().authenticated();
                })
                .sessionManagement(session -> {
                    session.sessionCreationPolicy(SessionCreationPolicy.STATELESS); //config manejo de sesion
                })
                .addFilter(jwtAuthenticationFilter)
                .addFilterBefore(authorizationFilter, UsernamePasswordAuthenticationFilter.class) //este filtro se va a ejecutar antes que el filtro de UsernamePasswordAuthenticationFilter

                .build();
    }

    ;

    // Metodo para crear un usuario en memoria
//    @Bean
//    UserDetailsService userDetailsService(){
//        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//        manager.createUser(User.withUsername("Felix")
//                .password("1234")
//                .roles()
//                .build());
//
//        return manager;
//    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
// # METODO DEPRECADO #
//    @Bean
//    AuthenticationManager authenticationManager(HttpSecurity httpSecurity, PasswordEncoder passwordEncoder) throws Exception{ //Adiministra la autenticacion de nuestra app y este exije manejar una encriptacion del password
//
//
//    return httpSecurity.getSharedObject(AuthenticationManagerBuilder.class)
//            .userDetailsService(userDetailsService())
//            .passwordEncoder(passwordEncoder)
//            .and().build();
//    }


}
