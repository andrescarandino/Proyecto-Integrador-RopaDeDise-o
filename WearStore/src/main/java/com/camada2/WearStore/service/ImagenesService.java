package com.camada2.WearStore.service;

import com.camada2.WearStore.entity.Imagenes;
import com.camada2.WearStore.repository.ImagenesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ImagenesService implements IService<Imagenes,Imagenes> {

     @Autowired
     private  ImagenesRepository imagenesRepository;


    @Override
    public Imagenes guardar(Imagenes imagenes) {
        return imagenesRepository.save(imagenes);
    }

    @Override
    public List<Imagenes> listar() {
        return imagenesRepository.findAll();
    }

    @Override
    public Imagenes buscar(Integer i) {
        return imagenesRepository.findById(i).orElse(null);
    }

    @Override
    public void eliminar(Integer i) {
imagenesRepository.findById(i);
    }
}
