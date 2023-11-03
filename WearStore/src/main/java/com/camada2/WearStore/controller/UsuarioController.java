package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.service.UsuarioServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioServices usuarioServices;




    @PostMapping("/")
    public ResponseEntity<Usuarios>guardarUsuario(@RequestBody Usuarios u ){
        usuarioServices.guardar(u);
        return ResponseEntity.status(HttpStatus.CREATED).build();

    }

    @PutMapping("/actualizarU")
    public ResponseEntity<Usuarios>ActualizarUsuario(@RequestBody Usuarios u ){
        usuarioServices.guardar(u);
        return ResponseEntity.status(HttpStatus.OK).build();

    }

    @GetMapping("/listar")
    public List<Usuarios>listarUsuarios(){
        return usuarioServices.listar();
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<Usuarios>buscarUsuario(@PathVariable Integer id){
      Usuarios usuario= usuarioServices.buscar(id);
        if (usuario != null){
            return ResponseEntity.status(HttpStatus.OK).body(usuario);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();


    }

}
