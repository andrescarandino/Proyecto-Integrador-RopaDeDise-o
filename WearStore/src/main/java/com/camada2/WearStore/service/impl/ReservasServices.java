package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Reservas;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.ProductosRepository;
import com.camada2.WearStore.repository.ReservasRepository;
import com.camada2.WearStore.repository.UsuariosRepository;
import com.camada2.WearStore.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
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
    public Reservas guardarReserva(Reservas reservas) throws IOException {

      Integer reservaUserid= reservas.getUsuario().getIdUsuarios();
      Optional<Usuarios> usuariosGuardado=usuariosRepository.findById(reservaUserid);

        reservas.setUsuario(usuariosGuardado.orElseThrow(() -> new ExpressionException("No se encontró el usuario con ID: " + reservaUserid)));

        List<Productos> productos = reservas.getProductos();
        List<Productos> productosAsociados = new ArrayList<>();

        for (Productos producto : productos) {
            // Verificar si el producto ya existe en la base de datos
            Productos productoExistente = productosRepository.findById(producto.getIdProductos()).orElse(null);

            if (productoExistente != null) {
                // Actualizar la referencia al producto existente
                producto = productoExistente;
            } else {
                // Guardar el producto si no existe
                producto = productosRepository.save(producto);
            }
            producto.agregarReserva(reservas);
            productosAsociados.add(producto);
        }
        reservas.setProductos(productosAsociados);

        Reservas reservaGuardada =reservasRepository.save(reservas);


       return reservaGuardada;


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
