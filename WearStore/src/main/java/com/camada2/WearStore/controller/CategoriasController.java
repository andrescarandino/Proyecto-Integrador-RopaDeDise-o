package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Categorias;
<<<<<<< HEAD
import com.camada2.WearStore.service.CategoriasService;
=======

import com.camada2.WearStore.service.impl.CategoriasService;
>>>>>>> f2e364c0771b128818d1c9e50c64b1926df22523
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







