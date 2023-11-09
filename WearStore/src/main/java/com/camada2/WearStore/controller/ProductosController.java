package com.camada2.WearStore.controller;


import com.camada2.WearStore.entity.Imagenes;
import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.service.ImagenesService;
import com.camada2.WearStore.service.ProductoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/productos")
public class ProductosController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private ImagenesService imagenesService;


    ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("/{id}")
    public ResponseEntity<Productos> buscarProductoPorId(@PathVariable Integer id){

        Productos producto = productoService.buscar(id);

        if (producto != null){
            return ResponseEntity.status(HttpStatus.OK).body(producto);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @GetMapping
    public List<Productos> listarProductos(){
        return productoService.listar();
    }

    @PostMapping
    public ResponseEntity<Productos> guardarProducto(@ModelAttribute Productos producto, @RequestParam("archivos") MultipartFile[] archivos) throws Exception {

        List<Imagenes> archivosNombre = new ArrayList<>();
        Arrays.asList(archivos).stream().forEach(archivo -> {

            imagenesService.guardarArchivo(archivo);
            Imagenes imagen = new Imagenes();
            imagen.setTitulo(archivo.getOriginalFilename());
            imagen.setRuta(Paths.get("img")+archivo.getOriginalFilename());
            archivosNombre.add(imagen);
            imagenesService.guardar(imagen);
        });

        producto.setImagenes(archivosNombre);
        productoService.guardar(producto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Productos> modificarProductos(@RequestBody Productos producto) throws Exception {

        productoService.actualizar(producto);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Productos> eliminarProductoPorId(@PathVariable Integer id){
        productoService.eliminar(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }



}
