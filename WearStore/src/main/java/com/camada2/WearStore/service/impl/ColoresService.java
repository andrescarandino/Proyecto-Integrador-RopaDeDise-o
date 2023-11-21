package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.Colores;
import com.camada2.WearStore.repository.ColoresRepository;
import com.camada2.WearStore.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColoresService implements IService<Colores,Colores> {


    @Autowired
    private ColoresRepository coloresRepository;
    @Override
    public Colores guardar(Colores colores) {
        return coloresRepository.save(colores);
    }

    @Override
    public List<Colores> listar() {
        return coloresRepository.findAll();
    }

    @Override
    public Colores buscar(Integer i) {
        return coloresRepository.findById(i).orElse(null);
    }

    @Override
    public void eliminar(Integer i) {
        coloresRepository.deleteById(i);
    }

    @Override
    public Colores actualizar(Colores colores) {
        return null;
    }
}