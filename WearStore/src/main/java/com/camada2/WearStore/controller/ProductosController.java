package com.camada2.WearStore.controller;


import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/listar")
    public List<Productos> listarProductos(){
        return productoService.listar();
    }

    @PostMapping
    public ResponseEntity<Productos> guardarProducto(@RequestBody Productos producto){
        productoService.guardar(producto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/actualizarP")
    public ResponseEntity<Productos> modificarProductos(@RequestBody Productos producto){

        productoService.guardar(producto);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Productos> modificarProductoParcial(@PathVariable Integer id, @RequestBody Productos producto) {
        Productos productoExistente = productoService.buscar(id);

        if (productoExistente == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        // Verificar y actualizar los campos modificados
        if (producto.getNombre() != null) {
            productoExistente.setNombre(producto.getNombre());
        }

        if (producto.getDescripcion() != null) {
            productoExistente.setDescripcion(producto.getDescripcion());
        }

        if (producto.getPrecio() >= 0) {
            productoExistente.setPrecio(producto.getPrecio());
        }

        if (producto.getCantidad() != null) {
            productoExistente.setCantidad(producto.getCantidad());
        }





        // Guardar el producto modificado
        productoService.guardar(productoExistente);

        return ResponseEntity.status(HttpStatus.OK).body(productoExistente);
    }


    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Productos> eliminarProductoPorId(@PathVariable  Integer id){
        productoService.eliminar(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }



}
