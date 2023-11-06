package com.camada2.WearStore.service;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Path;
import java.util.stream.Stream;

public interface IServiceImg {

    public void iniciar();

    public void guardarArchivo(MultipartFile archivo);

    public Resource cargarArchivo(String nombreArchivo);
    public void borrarTodasImagenes();

    public Stream<Path> cargarTodasImagenes();

    public String borrarArchivo(String archivo);

}
