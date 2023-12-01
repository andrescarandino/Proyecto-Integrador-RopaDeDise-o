package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.FechaOcupada;
import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Reservas;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.FechaOcupadaRepository;
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
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservasServices implements IService<Reservas,Reservas> {

    @Autowired
    ReservasRepository reservasRepository;

    @Autowired
    ProductosRepository productosRepository;

    @Autowired
    UsuariosRepository usuariosRepository;
    @Autowired
    FechaOcupadaRepository fechaOcupadaRepository;

    @Transactional
    @Override
    public Reservas guardar(Reservas reservas) throws IOException {

        return reservasRepository.save(reservas);
    }

    @Transactional
    public Reservas guardarReserva(Reservas reserva) throws IOException {

        Integer reservaUserid = reserva.getUsuario().getIdUsuarios();
        Optional<Usuarios> usuariosGuardado = usuariosRepository.findById(reservaUserid);
        reserva.setUsuario(usuariosGuardado.orElseThrow(() -> new ExpressionException("No se encontró el usuario con ID: " + reservaUserid)));

        Productos producto = productosRepository.findById(reserva.getProducto().getIdProductos()).orElse(null);
        Usuarios usuario = usuariosRepository.findById(reserva.getUsuario().getIdUsuarios()).orElse(null);
        if (producto != null && usuario != null) {

            List<Reservas> reservasEnRango = reservasRepository.findByProductoAndFechaFinAfterAndFechaInicioBefore(
                    producto, reserva.getFechaInicio(), reserva.getFechaFin()
            );
            if (!reservasEnRango.isEmpty()) {
                throw new RuntimeException("El producto ya está reservado en el rango de fechas especificado.");
            }
            // Establecer las asociaciones
            reserva.setProducto(producto);
            reserva.setUsuario(usuario);

            // Guardar la reserva
            Reservas reservaGuardada = reservasRepository.save(reserva);

            actualizarFechasOcupadas(producto, reserva.getFechaInicio(), reserva.getFechaFin());
            return reservaGuardada;
        } else {
            // Manejar el caso donde el producto o el usuario no se encuentran
            // Esto podría ser una excepción, un mensaje de error, etc.

            throw new RuntimeException("No se pudo encontrar el producto o el usuario asociado a la reserva.");
        }
    }

    private void actualizarFechasOcupadas(Productos producto, Date fechaInicio, Date fechaFin) {
        FechaOcupada fechaOcupada = new FechaOcupada();
        fechaOcupada.setFechaInicio(fechaInicio);
        fechaOcupada.setFechaFin(fechaFin);
        fechaOcupada.setProducto(producto);
        fechaOcupadaRepository.save(fechaOcupada);
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
