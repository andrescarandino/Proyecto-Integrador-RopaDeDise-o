package com.camada2.WearStore.service;


import com.camada2.WearStore.entity.Categorias;
import com.camada2.WearStore.repository.CategoriasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriasService {

    private final CategoriasRepository categoriasRepository;

    @Autowired
    public CategoriasService(CategoriasRepository categoriasRepository) {
        this.categoriasRepository = categoriasRepository;
    }

    // Métodos para operaciones relacionadas con Categorias
    public Categorias guardarCategoria(Categorias categoria) {
        return categoriasRepository.save(categoria);
    }

    public List<Categorias> obtenerTodasCategorias() {
        return categoriasRepository.findAll();
    }

    public Categorias obtenerCategoriaPorId(Integer id) {

        return categoriasRepository.findById(id).orElse(null);
    }

    public void eliminarCategoria(Integer id) {
        categoriasRepository.deleteById(id);
    }
}

