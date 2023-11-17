package com.camada2.WearStore.service.impl;



import com.camada2.WearStore.entity.Caracteristica;
import com.camada2.WearStore.exeptions.ElementoNoencontradoException;
import com.camada2.WearStore.repository.CaracteristicaRepository;
import com.camada2.WearStore.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.util.List;


@Service
public class CaracteristicaService implements IService<Caracteristica, Caracteristica> {

    private final CaracteristicaRepository caracteristicaRepository;

    @Autowired
    public CaracteristicaService(CaracteristicaRepository caracteristicaRepository) {
        this.caracteristicaRepository = caracteristicaRepository;
    }

    @Override
    public Caracteristica guardar(Caracteristica caracteristica) throws IOException {

        List<Caracteristica> listaCaracteristicas = caracteristicaRepository.findAll();
        String caracteristicaNombre = caracteristica.getNombre();

        if(!listaCaracteristicas.isEmpty()){
            for(Caracteristica unaCaracteristica : listaCaracteristicas){
                String unNombre = unaCaracteristica.getNombre();
                if(unNombre.equals(caracteristicaNombre)){
                    throw new IOException("Esta Caracteristica ya esta creada, intente con un nombre diferente");
                }
            }

        }
        return caracteristicaRepository.save(caracteristica);
    }


    public List<Caracteristica> listar() {
        return caracteristicaRepository.findAll();
    }


    public Caracteristica buscar(Integer id) {
        return caracteristicaRepository.findById(id).orElse(null);
    }

    public List<Caracteristica> buscarPorNombre(String nombre) {
        return caracteristicaRepository.findByNombre(nombre);
    }


    public void eliminar(Integer id) {
        caracteristicaRepository.deleteById(id);
    }

    @Override
    public Caracteristica actualizar(Caracteristica caracteristica) {
        return null;
    }


    public Caracteristica actualizar(Integer id, Caracteristica newCaracteristica) {

        Caracteristica actualCaracteristica = caracteristicaRepository.findById(id)
                .orElseThrow(() -> new ElementoNoencontradoException("Caracteristica con ID" + id + "no encontrada"));

        //actualizar los campos de la categoria existente
        actualCaracteristica.setNombre(newCaracteristica.getNombre());
        actualCaracteristica.setDescripcion(newCaracteristica.getDescripcion());
        actualCaracteristica.setRutaIcono(newCaracteristica.getRutaIcono());

        //guardar actualizacion de caracteristica
        return caracteristicaRepository.save(actualCaracteristica);
        }
    }


