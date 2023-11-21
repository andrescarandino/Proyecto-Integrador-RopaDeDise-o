package com.camada2.WearStore.controller;


import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.service.impl.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductosController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/{id}")
    public ResponseEntity<Productos> buscarProductoPorId(@PathVariable Integer id){

        Productos producto = productoService.buscar(id);

        if (producto != null){
            return ResponseEntity.status(HttpStatus.OK).body(producto);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @GetMapping("/listarP")
    public List<Productos> listarProductos(){
        return productoService.listar();
    }

    @PostMapping
    public ResponseEntity<Productos> guardarProducto(@RequestBody Productos producto) throws IOException {
        productoService.guardar(producto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Productos> modificarProductos(@RequestBody Productos producto) throws Exception {

        productoService.actualizar(producto);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/eliminar{id}")
    public ResponseEntity<Productos> eliminarProductoPorId(@PathVariable  Integer id) throws IOException {
        productoService.eliminar(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/buscar/{palabraClave}")

    public List<Productos> buscarPor (@PathVariable("palabraClave") String palabraClave){
    return productoService.buscarPorAtributo(palabraClave);

    }




}
