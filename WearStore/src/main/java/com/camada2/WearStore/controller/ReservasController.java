package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Reservas;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.exeptions.EmailException;
import com.camada2.WearStore.exeptions.ReservaException;
import com.camada2.WearStore.service.impl.ReservasServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/reserva")
public class ReservasController {
    @Autowired
    ReservasServices reservasServices;

    @ExceptionHandler(ReservaException.class)
    public ResponseEntity<String> ReservaException(){
        return ResponseEntity.status(HttpStatus.CONFLICT).body("La fecha de la reserva no puede ser anterior al dia de hoy" +
                "o tal vez el producto ya tiene ocupadas esas fechas");
    }

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

    @GetMapping("/email/{email}")
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<List<Reservas>> obtenerReservasPorUsuario(@PathVariable String email) {
        List<Reservas> reservas = reservasServices.obtenerReservasPorUsuario(email);
        return ResponseEntity.ok(reservas);
    }
}
