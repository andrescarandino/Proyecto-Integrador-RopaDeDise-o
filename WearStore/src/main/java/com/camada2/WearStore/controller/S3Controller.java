package com.camada2.WearStore.controller;

import com.camada2.WearStore.service.S3ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class S3Controller {

    @Autowired
    private S3ServiceImpl s3Service;

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("archivo") MultipartFile file) throws IOException {

        return s3Service.uploadFile(file);

    }

    @GetMapping("/download/{filename}")
    public String downloadFile(@PathVariable("filename") String filename) throws IOException {
        return s3Service.downloadFile(filename);
    }

}
