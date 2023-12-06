package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Reservas;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.service.impl.ReservasServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/reserva")
public class ReservasController {
    @Autowired
    ReservasServices reservasServices;


    @PostMapping
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<Reservas>guardarReserva(@RequestBody Reservas reserva) throws IOException {
        Reservas reservaGuardada= reservasServices.guardarReserva(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(reservaGuardada);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<Reservas>buscarReserva(@PathVariable Integer id){
        Reservas reservas = reservasServices.buscar(id);
        return ResponseEntity.ok(reservas);
    }

    @GetMapping("/{email}")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<List<Reservas>> obtenerReservasPorUsuario(@PathVariable String email) {
        List<Reservas> reservas = reservasServices.obtenerReservasPorUsuario(email);
        return ResponseEntity.ok(reservas);
    }
}
