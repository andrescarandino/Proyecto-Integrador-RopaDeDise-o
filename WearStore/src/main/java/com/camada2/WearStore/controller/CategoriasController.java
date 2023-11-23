package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Categorias;

import com.camada2.WearStore.service.impl.CategoriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriasController {

    @Autowired
    private CategoriasService categoriasService;

    // Endpoint para crear una nueva categoría
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> crearCategoria(@RequestBody Categorias categoria) {
        categoriasService.guardar(categoria);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    // Endpoint para obtener todas las categorías
    @GetMapping
    public ResponseEntity<List<Categorias>> obtenerTodasCategorias() {
        return ResponseEntity.status(HttpStatus.OK).body(categoriasService.listar());
    }

    // Endpoint para obtener una categoría por ID
    @GetMapping("/{id}")
    public ResponseEntity<Categorias> obtenerCategoriaPorId(@PathVariable Integer id) {
        return ResponseEntity.status(HttpStatus.OK).body(categoriasService.buscar(id));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> actualizar(Categorias categorias){
        categoriasService.actualizar(categorias);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    // Endpoint para eliminar una categoría por ID
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Integer id) {
        categoriasService.eliminar(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}

