package com.camada2.WearStore.service;

import com.camada2.WearStore.entity.Imagenes;
import com.camada2.WearStore.repository.ImagenesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.filechooser.FileNameExtensionFilter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Stream;


@Service
public class ImagenesService implements IService<Imagenes,Imagenes>, IServiceImg {

     @Autowired
     private  ImagenesRepository imagenesRepository;

     private final Path root = Paths.get("img");

     @Override
     public void iniciar(){
         try {
             Files.createDirectory(root);
         } catch (IOException e) {
             throw new RuntimeException(e);
         }
     }

     @Override
     public void guardarArchivo(MultipartFile archivo) {

         try {
             String nombreArchivo = archivo.getOriginalFilename();
             String extensionArchivo = nombreArchivo.substring(nombreArchivo.lastIndexOf(".")).toLowerCase();

             if (extensionArchivo.equals(".jpg") || extensionArchivo.equals(".jpeg") || extensionArchivo.equals(".png")){
                 Files.copy(archivo.getInputStream(), this.root.resolve(archivo.getOriginalFilename()));
             }else{
                 throw new RuntimeException("El archivo debe ser .jpg .jpeg .png");
             }
         } catch (IOException e) {
             throw new RuntimeException(e);
         }
     }

    @Override
     public Resource cargarArchivo(String nombreArchivo){

         try {
             Path archivo = root.resolve(nombreArchivo);
             Resource recurso = new UrlResource(archivo.toUri());

             if (recurso.exists() || recurso.isReadable()){
                 return recurso;
             }
            throw new RuntimeException("Archivo no se puede leer");
         } catch (MalformedURLException e) {
             throw new RuntimeException("Error: "+ e.getMessage());
         }
     }

    @Override
     public void borrarTodasImagenes(){
         FileSystemUtils.deleteRecursively(root.toFile());
     }

    @Override
     public Stream<Path> cargarTodasImagenes(){
        try {
            return Files.walk(this.root, 1).filter(path -> !path.equals(this.root))
                    .map(this.root::relativize);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    @Override
     public String borrarArchivo(String archivo) {
        try {
            Boolean borrar = Files.deleteIfExists(this.root.resolve(archivo));
            return "Archivo Borrado";
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
     }

    @Override
    public Imagenes guardar(Imagenes imagenes) {
        return imagenesRepository.save(imagenes);
    }

    @Override
    public List<Imagenes> listar() {
        return imagenesRepository.findAll();
    }

    @Override
    public Imagenes buscar(Integer i) {
        return imagenesRepository.findById(i).orElse(null);
    }

    @Override
    public void eliminar(Integer i) {
        imagenesRepository.findById(i);
    }
}
