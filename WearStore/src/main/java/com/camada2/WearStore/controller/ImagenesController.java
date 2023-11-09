//package com.camada2.WearStore.controller;
//
//import com.camada2.WearStore.entity.Imagenes;
//import com.camada2.WearStore.service.ImagenesService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.Resource;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
//
//import java.nio.file.FileAlreadyExistsException;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@RestController
//@RequestMapping(("/img"))
//public class ImagenesController {
//
//    @Autowired
//    ImagenesService imagenesService;
//
//    @PostMapping("/subida")
//    public ResponseEntity<Imagenes> subidaArchivos(@RequestParam("archivos")MultipartFile[] archivos){
//
//        List<String> archivosNombre = new ArrayList<>();
//
//        Arrays.asList(archivos).stream().forEach(archivo -> {
//
//            imagenesService.guardarArchivo(archivo);
//            archivosNombre.add(archivo.getOriginalFilename());
//        });
//
//        return ResponseEntity.status(HttpStatus.CREATED).build();
//    }
//
//    @GetMapping("/archivos")
//    public ResponseEntity<List<Imagenes>> getArchivos(){
//        List<Imagenes> archivosInfo = imagenesService.cargarTodasImagenes()
//                .map(path -> {
//                    String nombreArchivo = path.getFileName().toString();
//                    String url = MvcUriComponentsBuilder.fromMethodName(ImagenesController.class, "getArchivo",path.getFileName().toString()).build().toString();
//                    return new Imagenes(url, nombreArchivo);
//                }).collect(Collectors.toList());
//
//        return ResponseEntity.status(HttpStatus.OK).body(archivosInfo);
//    }
//
//    @GetMapping("/archivos/{nombreArchivo:.+}")
//    public ResponseEntity<Resource> getArchivo(@PathVariable String nombreArchivo){
//        Resource archivo = imagenesService.cargarArchivo(nombreArchivo);
//
//        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+archivo.getFilename()+"\"").body(archivo);
//    }
//
//    @DeleteMapping("/delete/{nombreArchivo:.+}")
//    public ResponseEntity<Imagenes> borrarArchivo(@PathVariable String nombreArchivo){
//        imagenesService.borrarArchivo(nombreArchivo);
//
//        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//    }
//
//
//
//}
