package com.camada2.WearStore.controller;

import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.exeptions.EmailException;
import com.camada2.WearStore.exeptions.UsuarioInexistenteExeption;
import com.camada2.WearStore.service.impl.UsuarioServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    UsuarioServices usuarioServices;


    @ExceptionHandler(EmailException.class)
    public ResponseEntity<String> falloAlEnviarEmail(){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("El email no se puedo enviar , intente mas tarde");
    }

    @ExceptionHandler(UsuarioInexistenteExeption.class)
    public ResponseEntity<String> UsuarioNoExiste(){
        return new ResponseEntity<String>("el usuario no existe",HttpStatus.NOT_FOUND);


    }
    @PostMapping
    public ResponseEntity<Usuarios> guardarUsuario(@RequestBody UsuariosDTO usuariosDTO) {
        Usuarios usuarioGuardado = usuarioServices.guardar(usuariosDTO);
        //usuarioServices.generarVerificacionEmail(usuarioGuardado.getUser(), usuarioGuardado);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    public ResponseEntity<?> createUser(@Valid @RequestBody UsuariosDTO usuariosDTO) {

        usuarioServices.createUser(usuariosDTO);

        return ResponseEntity.ok().build();
    }


    @PutMapping
    public ResponseEntity<Usuarios>ActualizarUsuario(@RequestBody UsuariosDTO u ){
        usuarioServices.actualizar(u);

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

    @GetMapping
    public ResponseEntity<Usuarios> buscarPorMail(@RequestParam("mail") String mail){
        return ResponseEntity.ok(usuarioServices.buscarPorMail(mail));
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id){
        usuarioServices.eliminar(id);
        return ResponseEntity.ok().build();
    }


}
