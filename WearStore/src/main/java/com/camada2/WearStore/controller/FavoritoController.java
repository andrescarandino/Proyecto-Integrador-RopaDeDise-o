package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Favorito;
import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.service.impl.FavoritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favoritos")
@CrossOrigin(origins = "*")
public class FavoritoController {

    @Autowired
    FavoritoService favoritoService;

    @PostMapping
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<Favorito> guardar(@RequestParam ("usuario") int usuario,
                                            @RequestParam ("producto") int producto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(favoritoService.guardar(usuario, producto));
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<List<Productos>> listar(@RequestParam("usuario") int usuarioId){
        return ResponseEntity.status(HttpStatus.CREATED).body(favoritoService.listar(usuarioId));
    }

    @DeleteMapping
    @PreAuthorize("hasAnyAuthority('ADMIN','USER')")
    public ResponseEntity<String> eliminar(@RequestParam("usuario") int usuario,
                                             @RequestParam("producto") int producto){

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(favoritoService.eliminar(usuario, producto));
    }
}
