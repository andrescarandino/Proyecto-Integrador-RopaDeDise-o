package com.camada2.WearStore;


import com.camada2.WearStore.entity.TipoUsuarios;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.UsuariosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import java.util.*;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EntityScan(basePackages = "com.camada2.*")
@EnableJpaRepositories("com.camada2.WearStore.repository")
public class WearStoreOnlineApplication implements CommandLineRunner {


    public static void main(String[] args) {
        SpringApplication.run(WearStoreOnlineApplication.class, args);
    }


    @Autowired
    UsuariosRepository usuariosRepository;

    @Bean
    CommandLineRunner init() {
        return args -> {
            String email = "admin@admin";


            Optional<Usuarios> existingUser = usuariosRepository.findUsuariosByEmail(email);

            if (existingUser.isEmpty()) {

                Usuarios usuario = new Usuarios();
                usuario.setUser("admin");
                usuario.setNombre("admin");
                usuario.setEmail(email);
                usuario.setPassword(("admin"));
                usuario.setRoles(List.of(new TipoUsuarios("ADMIN")));

                usuariosRepository.save(usuario);
            } else {

                System.out.println("El usuario con correo ya existe en la base de datos.");
            }
        };
    }

    @Configuration
    public class CorsConfig {

        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST", "PUT", "DELETE");
                }
            };
        }
    }

    @Override
    public void run(String... args) throws Exception {
    }
}
