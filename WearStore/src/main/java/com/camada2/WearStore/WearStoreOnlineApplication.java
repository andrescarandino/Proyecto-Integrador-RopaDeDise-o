package com.camada2.WearStore;

//import com.camada2.WearStore.service.ImagenesService;
import jakarta.annotation.Resource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.nio.file.Files;
import java.nio.file.Path;

@SpringBootApplication
@ComponentScan(basePackages = {"com.amazonaws.services.s3.AmazonS3Client"})
public class WearStoreOnlineApplication implements CommandLineRunner {

	//@Resource
	//ImagenesService imagenesService;

	public static void main(String[] args) {
		SpringApplication.run(WearStoreOnlineApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		if (!Files.isDirectory(Path.of("../WearStore/img")))
//		imagenesService.iniciar();
	}
}
