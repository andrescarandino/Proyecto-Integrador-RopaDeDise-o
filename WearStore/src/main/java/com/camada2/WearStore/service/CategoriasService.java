package com.camada2.WearStore.service;


import com.camada2.WearStore.entity.Categorias;
import com.camada2.WearStore.repository.CategoriasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriasService implements IService <Categorias, Categorias>{

    private final CategoriasRepository categoriasRepository;

    @Autowired
    public CategoriasService(CategoriasRepository categoriasRepository) {
        this.categoriasRepository = categoriasRepository;
    }

    // Métodos para operaciones relacionadas con Categorias
    public Categorias guardar(Categorias categoria) {
        return categoriasRepository.save(categoria);
    }

    public List<Categorias> listar() {
        return categoriasRepository.findAll();
    }

    public Categorias buscar(Integer id) {

        return categoriasRepository.findById(id).orElse(null);
    }

    public void eliminar(Integer id) {
        categoriasRepository.deleteById(id);
    }


}

