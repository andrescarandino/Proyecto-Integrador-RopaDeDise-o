package com.camada2.WearStore.service;


import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;
import com.camada2.WearStore.entity.vm.Asset;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import com.amazonaws.services.s3.AmazonS3Client;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;


@Service
public class S3Service {

    private final static String BUCKET = "1023c04-grupo4";

    @Autowired
    private AmazonS3Client s3Client;

    public String putObject(MultipartFile file) {
        String extension = StringUtils.getFilenameExtension(file.getOriginalFilename());
        String key = String.format("%s.%s", UUID.randomUUID(), extension);

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(file.getContentType());

        try {
            PutObjectRequest putObjectRequest = new PutObjectRequest(BUCKET, key, file.getInputStream(), objectMetadata);

            s3Client.putObject(putObjectRequest);
            return key;
        } catch (IOException e) {

            throw new RuntimeException(e);

        }
    }

    public Asset getObject(String key) {

        S3Object s3Object = s3Client.getObject(BUCKET, key);
        ObjectMetadata metadata = s3Object.getObjectMetadata();

        try {
            S3ObjectInputStream inputStream = s3Object.getObjectContent();
            byte[] bytes = IOUtils.toByteArray(inputStream);

            return new Asset(bytes, metadata.getContentType());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public void deleteObject(String key){
        s3Client.deleteObject(BUCKET, key);
    }

    public String getObjectUrl(String key){
        return String.format("http://%s.s3.amazonaws.com/%s", BUCKET, key);
    }

}




