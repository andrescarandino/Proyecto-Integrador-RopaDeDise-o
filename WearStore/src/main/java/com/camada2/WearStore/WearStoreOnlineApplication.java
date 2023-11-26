package com.camada2.WearStore;

import com.camada2.WearStore.entity.Roles;
import com.camada2.WearStore.util.ERole;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;
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
    PasswordEncoder passwordEncoder;

    @Autowired
    UsuariosRepository usuariosRepository;

    @Bean
    CommandLineRunner init() {
        Set<Roles> rol = Set.of(new Roles(ERole.ADMIN));
        return args -> {
            Usuarios usuario = new Usuarios();
            usuario.setUser("admin");
            usuario.setNombre("admin");
            usuario.setEmail("admin@admin");
            usuario.setPassword(passwordEncoder.encode("admin"));
            usuario.setRoles(rol);

            usuariosRepository.save(usuario);
        };
    }

    @Configuration
    public class CorsConfig {
        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**")
                            .allowedOrigins("*")
                            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                            .allowedHeaders("Content-Type", "Authorization", "X-Requested-With")
                            .maxAge(3600);
                }
            };
        }
    }


    @Override
    public void run(String... args) throws Exception {

    }
}
