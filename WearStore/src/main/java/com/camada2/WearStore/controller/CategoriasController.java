package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Categorias;

import com.camada2.WearStore.service.impl.CategoriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriasController {

    @Autowired
    private CategoriasService categoriasService;

    // Endpoint para crear una nueva categoría
    @PostMapping
    public Categorias crearCategoria(@RequestBody Categorias categoria) {
        return categoriasService.guardar(categoria);
    }

    // Endpoint para obtener todas las categorías
    @GetMapping
    public List<Categorias> obtenerTodasCategorias() {
        return categoriasService.listar();
    }

    // Endpoint para obtener una categoría por ID
    @GetMapping("/{id}")
    public Categorias obtenerCategoriaPorId(@PathVariable Integer id) {
        return categoriasService.buscar(id);
    }

    // Endpoint para eliminar una categoría por ID
    @DeleteMapping("/{id}")
    public void eliminarCategoria(@PathVariable Integer id) {
        categoriasService.eliminar(id);
    }
}

