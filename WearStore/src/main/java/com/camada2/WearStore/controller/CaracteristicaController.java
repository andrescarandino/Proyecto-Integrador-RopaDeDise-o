package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Caracteristica;
import com.camada2.WearStore.exeptions.ElementoNoencontradoException;
import com.camada2.WearStore.service.impl.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/caracteristicas")
@CrossOrigin(origins = "*")
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> crearCaracteristica(@RequestBody Caracteristica caracteristica) throws IOException {
        caracteristicaService.guardar(caracteristica);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    // endpoint para obtener todas las caracteristicas
    @GetMapping
    public ResponseEntity<List<Caracteristica>> obtenerTodasCaracteristica(){
        return ResponseEntity.status(HttpStatus.OK).body(caracteristicaService.listar());
    }
    // Endpoint para obtener una caracteristica por id
    @GetMapping("/{id}")
    public ResponseEntity<Caracteristica> obtenerCaracteristicaPorId(@PathVariable Integer id){
        return ResponseEntity.status(HttpStatus.OK).body(caracteristicaService.buscar(id));
    }

    @GetMapping(params ="nombre")
    public ResponseEntity<List<Caracteristica>> buscarCaracteristicaPorNombre(@RequestParam String nombre) {
        List<Caracteristica> caracteristicas = caracteristicaService.buscarPorNombre(nombre);

        if (!caracteristicas.isEmpty()) {
            return ResponseEntity.ok(caracteristicas);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint para eliminar una categoria por ID
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> eliminarCaracteristica(@PathVariable Integer id){
        caracteristicaService.eliminar(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Caracteristica> actualizarCaracteristica(
            @PathVariable Integer id,
            @RequestBody Caracteristica nuevaCaracteristica){
        try{
            Caracteristica caracteristicaActualizada = caracteristicaService.actualizar(id,nuevaCaracteristica);
            return ResponseEntity.ok(caracteristicaActualizada);
        } catch (ElementoNoencontradoException e){
            return ResponseEntity.notFound().build();
        }
    }

}


