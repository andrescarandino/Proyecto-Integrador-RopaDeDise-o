package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Caracteristica;
import com.camada2.WearStore.exeptions.ElementoNoencontradoException;
import com.camada2.WearStore.service.impl.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/caracteristica")

public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @PostMapping
    public Caracteristica crearCaracteristica(@RequestBody Caracteristica caracteristica) throws IOException {
        return caracteristicaService.guardar(caracteristica);
    }
    // endpoint para obtener todas las caracteristicas
    @GetMapping
    public List<Caracteristica> obtenerTodasCaracteristica(){
        return caracteristicaService.listar();
    }
    // Endpoint para obtener una caracteristica por id
    @GetMapping("/{id}")
    public Caracteristica obtenerCaracteristicaPorId(@PathVariable Integer id){
        return caracteristicaService.buscar(id);
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
    public void eliminarCaracteristica(@PathVariable Integer id){
        caracteristicaService.eliminar(id);
    }

    @PutMapping("/{id}")
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


