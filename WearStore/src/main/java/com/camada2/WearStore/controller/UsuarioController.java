package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.exeptions.EmailException;
import com.camada2.WearStore.exeptions.UsuarioInexistenteExeption;
import com.camada2.WearStore.service.UsuarioServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioServices usuarioServices;





    @ExceptionHandler(EmailException.class)
    public ResponseEntity<String> handlFaliedSendEmail(){
        return new ResponseEntity<String>("El email no se puedo enviar , intente mas tarde",HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UsuarioInexistenteExeption.class)
    public ResponseEntity<String> handlerUserNotExist(){
        return new ResponseEntity<String>("el usuario no existe",HttpStatus.NOT_FOUND);


    }

    @PostMapping("/")
    public ResponseEntity<Usuarios>guardarUsuario(@RequestBody Usuarios u ){
        Usuarios usuario=usuarioServices.guardar(u);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuario);

    }

    @PutMapping("/actualizarU")
    public ResponseEntity<Usuarios>ActualizarUsuario(@RequestBody Usuarios u ){
        Usuarios usuario=usuarioServices.guardar(u);

        return ResponseEntity.status(HttpStatus.OK).body(usuario);

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
    @PostMapping("/email")
    public ResponseEntity<String>createEmailVerification(@RequestBody LinkedHashMap<String, String> body) throws EmailException {

        usuarioServices.generarVerificacionEmail(body.get("user"));
        return new ResponseEntity<String>("verificacion de codigo generada ,email enviado",HttpStatus.OK);

    }



}
