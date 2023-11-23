package com.camada2.WearStore;

import com.camada2.WearStore.entity.ERole;
import com.camada2.WearStore.entity.TipoUsuarios;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.UsuariosRepository;
import com.camada2.WearStore.service.impl.ImagenesService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Calendar;
import java.util.Date;
import java.util.Set;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.camada2.*")
@EnableAutoConfiguration
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
        return args -> {
            Usuarios usuario = new Usuarios();
            usuario.setUser("admin");
            usuario.setNombre("admin");
            usuario.setEmail("admin@admin");
            usuario.setPassword(passwordEncoder.encode("admin"));
            usuario.setRoles(Set.of(new TipoUsuarios(ERole.ADMIN)));

            usuariosRepository.save(usuario);
        };
    }


    @Override
    public void run(String... args) throws Exception {
    }
}