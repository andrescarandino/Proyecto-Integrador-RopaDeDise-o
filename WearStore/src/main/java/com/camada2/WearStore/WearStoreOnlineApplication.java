package com.camada2.WearStore;

import com.camada2.WearStore.service.impl.ImagenesService;
import jakarta.annotation.Resource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Files;
import java.nio.file.Path;

@SpringBootApplication
public class WearStoreOnlineApplication implements CommandLineRunner {



	public static void main(String[] args) {
		SpringApplication.run(WearStoreOnlineApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	}
}
