package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.Imagenes;
import com.camada2.WearStore.repository.ImagenesRepository;
import com.camada2.WearStore.service.IS3ServiceImg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseInputStream;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;


import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;


@Service
public class ImagenesService implements IS3ServiceImg<String, MultipartFile> {


    @Value("${upload.s3.localPath}")
    private String localPath;

    @Value("${aws.bucket}1")
    private String bucketName;

    @Value("${aws.prefix}")
    private String prefix;

    private final S3Client s3CLient;

    @Autowired
    public ImagenesService(S3Client s3CLient) {
        this.s3CLient = s3CLient;
    }

    @Autowired
    private ImagenesRepository imagenesRepository;


    public Imagenes guardar(Imagenes imagenes, MultipartFile[] files) {
        List<Imagenes> listaImagenes = new ArrayList<>();
        Arrays.asList(files).stream().forEach(file -> {
            try {
                String file1 = uploadFile(file);
                Imagenes imagen = new Imagenes();
                imagen.setTitulo(file.getOriginalFilename());
                imagen.setRuta(file1);
                listaImagenes.add(imagen);

            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        return imagenesRepository.save(imagenes);
    }


    public List<Imagenes> listar() {
        return imagenesRepository.findAll();
    }
    public Imagenes buscar(Integer id) {
        return imagenesRepository.findById(id).orElse(null);
    }

    public void eliminar(Integer id) throws IOException {
        Optional<Imagenes> imagen = imagenesRepository.findById(id);
        deleteFile(imagen.get().getRuta());
    }

    public Imagenes actualizar(Imagenes imagenes) {
        return null;
    }

    public String uploadFile(MultipartFile file) throws IOException {

        try {
            String ext = StringUtils.getFilenameExtension(file.getOriginalFilename());
            if (ext.endsWith(".jpg") || ext.endsWith(".jpng") || ext.endsWith(".png")) {
                String filename = file.getOriginalFilename();
                PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                        .bucket(bucketName)
                        .key(prefix + UUID.randomUUID().toString() + filename)
                        .build();
                s3CLient.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

                return putObjectRequest.key();
            } else {
                return "El archivo debe ser una extension .jpg, .jpng, .png";
            }
        } catch (IOException e) {
            throw new IOException(e.getMessage());
        }
    }

    public String downloadFile(String filename) throws IOException {

        if (!doesObjectExists(filename)) {
            return "El archivo no existe";
        }

        GetObjectRequest request = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(prefix + filename)
                .build();

        ResponseInputStream<GetObjectResponse> result = s3CLient.getObject(request);

        try (FileOutputStream fos = new FileOutputStream(localPath + filename)) {
            byte[] readBuffer = new byte[1024];
            int readLength = 0;

            while ((readLength = result.read(readBuffer)) > 0) {
                fos.write(readBuffer, 0, readLength);
            }

        } catch (IOException e) {
            throw new IOException(e.getMessage());
        }

        return "Archivo descargado";

    }

    public String getFile(String filename) {
        GetObjectRequest request = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(prefix + filename)
                .build();

        String object = request.key();

        return "Archivo obtenido correctamente";
    }

    public List<String> listFiles() throws IOException {
        try {

            ListObjectsRequest listObjectsRequest = ListObjectsRequest.builder()
                    .bucket(bucketName)
                    .prefix(prefix)
                    .build();

            List<S3Object> objects = s3CLient.listObjects(listObjectsRequest).contents();
            List<String> fileNames = new ArrayList<>();

            for (S3Object object : objects) {
                fileNames.add(object.key());
            }
            return fileNames;
        } catch (S3Exception e) {
            throw new IOException(e.getMessage());
        }
    }

    public String updatefile(MultipartFile file, String oldFileName) throws IOException {
        if (!doesObjectExists(oldFileName)) {
            return "El archivo introducido no existe";
        }
        try {
            String newFileName = file.getOriginalFilename();
            deleteFile(oldFileName);

            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(newFileName)
                    .build();

            s3CLient.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));
            return "Archivo actualizado con exito en S3";
        } catch (S3Exception e) {
            throw new IOException(e.getMessage());
        }

    }

    public String renameFile(String oldFileName, String newFileName) throws IOException {
        if (!doesObjectExists(oldFileName)) {
            return "El archivo introducido no existe";
        }
        try {
            CopyObjectRequest copyObjectRequest = CopyObjectRequest.builder()
                    .destinationBucket(bucketName)
                    .copySource(bucketName + "/" + oldFileName)
                    .destinationKey(newFileName)
                    .build();

            s3CLient.copyObject(copyObjectRequest);
            deleteFile(oldFileName);
            return "Archivo renombrado con exito";
        } catch (S3Exception e) {
            throw new IOException(e.getMessage());
        }
    }

    public String deleteFile(String filename) throws IOException {
        if (!doesObjectExists(filename)) {
            return "El archivo introducido no existe";
        }
        try {

            DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                    .bucket(bucketName)
                    .key(filename)
                    .build();
            s3CLient.deleteObject(deleteObjectRequest);
            return "Archivo borrado Correctamente";

        } catch (S3Exception e) {
            throw new IOException(e.getMessage());
        }
    }

    private Boolean doesObjectExists(String objectKey) {
        try {
            HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                    .bucket(bucketName)
                    .key(objectKey)
                    .build();

            s3CLient.headObject(headObjectRequest);
            return true;

        } catch (S3Exception e) {
            if (e.statusCode() == 404) {
                return false;
            }
        }
        return true;
    }
}
