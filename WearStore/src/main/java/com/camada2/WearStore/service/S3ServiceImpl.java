package com.camada2.WearStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseInputStream;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.UUID;

@Service
public class S3ServiceImpl {

    @Value("${upload.s3.localPath}")
    private  String localPath;

    private final S3Client s3CLient;

    @Autowired
    public S3ServiceImpl(S3Client s3CLient) {
        this.s3CLient = s3CLient;
    }

    public String uploadFile(MultipartFile file)throws IOException{

        try {

            String filename = file.getOriginalFilename();
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket("${aws.bucket}")
                    .key(UUID.randomUUID().toString()+filename)
                    .build();
            s3CLient.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

            return "Archivo subio correctamente";

        }catch (IOException e){
            throw new IOException(e.getMessage());
        }
    }

    public String downloadFile(String filesname) throws IOException {

        if(!existeArchivo(filesname)){
            return "El archivo no existe";
        }

        GetObjectRequest request = GetObjectRequest.builder()
                .bucket("${aws.bucket}")
                .key(filesname)
                .build();

        ResponseInputStream<GetObjectResponse> result = s3CLient.getObject(request);

        try(FileOutputStream fos = new FileOutputStream(localPath + filesname)){
            byte[] readBuffer = new byte[1024];
            int readLength = 0;

            while ((readLength = result.read(readBuffer))>0){
                fos.write(readBuffer,0,readLength);
            }

        } catch (IOException e) {
            throw new IOException(e.getMessage());
        }

        return "Archivo descargado";

    }

    private Boolean existeArchivo(String objectKey){
        try {
            HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                    .bucket("${aws.bucket}")
                    .key(objectKey)
                    .build();

            s3CLient.headObject(headObjectRequest);
            return true;

        }catch (S3Exception e){
            if(e.statusCode()==404){
                return false;
            }
        }
        return true;
    }

}
