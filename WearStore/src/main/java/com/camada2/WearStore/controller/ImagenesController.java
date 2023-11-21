package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Imagenes;
import com.camada2.WearStore.service.impl.ImagenesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(("/img"))
public class ImagenesController {

    @Autowired
    ImagenesService imagenesService;

    @PostMapping("/upload")
    public ResponseEntity<List<Imagenes>> subidaArchivos(@RequestParam("archivos")MultipartFile[] archivos){

       List<Imagenes> list = imagenesService.guardar(archivos);


        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }

    @GetMapping("/download/{filename}")
    public String downloadFile(@PathVariable("filename") String filename) throws IOException {
        return imagenesService.downloadFile(filename);
    }

    @GetMapping("/list")
    public List<String> getAllObjects() throws IOException {
        return imagenesService.listFiles();
    }


    @PutMapping("/rename/{oldFileName}/{newFileName}")
    public String updateFileName(@PathVariable("oldFileName") String oldFileName, @PathVariable("newFileName") String newFileName) throws IOException {
        imagenesService.renameFile(oldFileName,newFileName);
        return "El archivo ha sido renombrado";
    }

    @PutMapping("/update/{oldFileName}")
    public String updateFile(@RequestParam("file") MultipartFile file, @PathVariable("oldFileName") String oldFileName) throws IOException {
        imagenesService.updatefile(file, oldFileName);
        return "El archivo fue actualizado";
    }

    @DeleteMapping("/delete/{filename}")
    public String deleteFile(@PathVariable("fileName") String filename) throws IOException {
        return imagenesService.deleteFile(filename);
    }


}
