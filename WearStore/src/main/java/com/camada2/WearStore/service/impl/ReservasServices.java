package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Reservas;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.ProductosRepository;
import com.camada2.WearStore.repository.ReservasRepository;
import com.camada2.WearStore.repository.UsuariosRepository;
import com.camada2.WearStore.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservasServices implements IService<Reservas,Reservas> {

    @Autowired
    ReservasRepository reservasRepository;

    @Autowired
    ProductosRepository productosRepository;

    @Autowired
    UsuariosRepository usuariosRepository;

    @Transactional
    @Override
    public Reservas guardar(Reservas reservas) throws IOException {

        return reservasRepository.save(reservas);
    }

    @Transactional
    public Reservas guardarReserva(Reservas reservas, String nombre) throws IOException {
        List<Productos> p =productosRepository.findProductosByNombre(nombre);
        reservas.setProductos(p);
        return reservasRepository.save(reservas);


    }






    @Override
    public List<Reservas> listar() {
        return reservasRepository.findAll();
    }

    public List<Reservas> obtenerReservasPorUsuario(String email) {
        return reservasRepository.findByUsuarioEmail(email);
    }

    @Override
    public Reservas buscar(Integer i) {
        return reservasRepository.findById(i).orElse(null);
    }

    @Override
    public void eliminar(Integer i) throws IOException {
     reservasRepository.deleteById(i);
    }

    @Override
    public Reservas actualizar(Reservas reservas) {
        return null;
    }
}
