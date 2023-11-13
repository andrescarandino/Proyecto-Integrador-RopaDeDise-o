package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.TipoProductos;
import com.camada2.WearStore.repository.TipoProductosRepository;
import com.camada2.WearStore.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipoProductosService implements IService<TipoProductos, TipoProductos> {

    private final TipoProductosRepository tipoProductosRepository;

    @Autowired
    public TipoProductosService(TipoProductosRepository tipoProductosRepository) {
        this.tipoProductosRepository = tipoProductosRepository;
    }

    @Override
    public TipoProductos guardar(TipoProductos tipoProducto) {
        return tipoProductosRepository.save(tipoProducto);
    }

    @Override
    public List<TipoProductos> listar() {
        return tipoProductosRepository.findAll();
    }

    @Override
    public TipoProductos buscar(Integer id) {
        return tipoProductosRepository.findById(id).orElse(null);
    }

    @Override
    public void eliminar(Integer id) {
        tipoProductosRepository.deleteById(id);
    }

    @Override
    public TipoProductos actualizar(TipoProductos tipoProductos) {
        return null;
    }
}

