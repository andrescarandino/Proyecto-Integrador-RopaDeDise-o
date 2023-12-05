package com.camada2.WearStore.config.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    public SecurityConfig(JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint) {
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
    }


    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }


    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }


    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .cors(cors -> cors.disable())
                .csrf(csrf -> csrf.disable())
                .exceptionHandling((exceptionHandling) -> exceptionHandling.authenticationEntryPoint(jwtAuthenticationEntryPoint))
                .sessionManagement(sessionManager -> sessionManager.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) //Permite la gestión de sessiones
                .authorizeHttpRequests((authRequest) ->
                        authRequest.requestMatchers("/login").permitAll()
                                .requestMatchers(HttpMethod.POST, "/usuarios").permitAll()
                                .requestMatchers(HttpMethod.GET, "/usuarios").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/usuarios/{id}").hasAnyRole("USER", "ADMIN")
                                .requestMatchers(HttpMethod.GET, "/usuarios/buscar").hasAnyRole("USER", "ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/usuarios/**").hasAnyRole("USER", "ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/usuarios/**").hasAnyRole("USER", "ADMIN")
                                .requestMatchers(HttpMethod.POST, "/productos").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.POST, "/productos/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/productos/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/productos/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/productos/**").permitAll()
                                .requestMatchers(HttpMethod.POST, "/img/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/img/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/img/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/img/**").permitAll()
                                .requestMatchers(HttpMethod.POST, "/categorias/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/categorias/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/categorias/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/categorias/**").permitAll()
                                .requestMatchers(HttpMethod.POST, "/caracteristicas/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/caracteristicas/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/caracteristicas/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/caracteristicas/**").permitAll()
                                .anyRequest().authenticated())
                .httpBasic(withDefaults())
                .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .build();

    }
}