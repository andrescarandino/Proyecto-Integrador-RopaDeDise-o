package com.camada2.WearStore.controller;



import com.camada2.WearStore.entity.TipoProductos;
import com.camada2.WearStore.service.impl.TipoProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tipoProductos")
@CrossOrigin(origins = "*")
public class TipoProductosController {

    private final TipoProductosService tipoProductosService;

    @Autowired
    public TipoProductosController(TipoProductosService tipoProductosService) {
        this.tipoProductosService = tipoProductosService;
    }

    @GetMapping
    public List<TipoProductos> listarTipoProductos() {
        return tipoProductosService.listar();
    }

    @GetMapping("/{id}")
    public TipoProductos obtenerTipoProducto(@PathVariable Integer id) {
        return tipoProductosService.buscar(id);
    }

    @PostMapping
    public TipoProductos crearTipoProducto(@RequestBody TipoProductos tipoProducto) {
        return tipoProductosService.guardar(tipoProducto);
    }

    @PutMapping("/{id}")
    public TipoProductos actualizarTipoProducto(@PathVariable Integer id, @RequestBody TipoProductos tipoProducto) {
        tipoProducto.setIdTipoProductos(id);
        return tipoProductosService.actualizar(tipoProducto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarTipoProducto(@PathVariable Integer id) {
        tipoProductosService.eliminar(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}

