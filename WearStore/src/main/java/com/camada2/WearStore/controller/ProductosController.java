package com.camada2.WearStore.controller;


import com.camada2.WearStore.entity.FechaOcupada;
import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Reservas;
import com.camada2.WearStore.service.impl.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*")
public class ProductosController {

    @Autowired
    private ProductoService productoService;


    @GetMapping("/{id}")
    public ResponseEntity<Productos> buscarProductoPorId(@PathVariable Integer id){

        Productos producto = productoService.buscar(id);

        if (producto != null) {
            // Verificar si hay reservas asociadas y cargar las fechas ocupadas
            if (producto.getReservas() != null && !producto.getReservas().isEmpty()) {
                List<FechaOcupada> fechasOcupadas = new ArrayList<>();
                for (Reservas reserva : producto.getReservas()) {
                    fechasOcupadas.add(new FechaOcupada(producto, reserva.getFechaInicio(), reserva.getFechaFin()));

                }
                producto.setFechasOcupadas(fechasOcupadas);
            }

            return new ResponseEntity<>(producto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping
    public List<Productos> listarProductos(){
        return productoService.listar();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Productos> guardarProducto(@RequestBody Productos producto) throws IOException {
        productoService.guardar(producto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Productos> modificarProductos(@RequestBody Productos producto) throws Exception {

        productoService.actualizar(producto);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Productos> eliminarProductoPorId(@PathVariable  Integer id) throws IOException {
        productoService.eliminar(id);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/buscar/{palabraClave}")

    public List<Productos> buscarPor (@PathVariable("palabraClave") String palabraClave){
    return productoService.buscarPorAtributo(palabraClave);

    }




}
