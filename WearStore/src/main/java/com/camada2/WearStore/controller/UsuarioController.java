package com.camada2.WearStore.controller;

import com.camada2.WearStore.Dto.UsuariosDTO;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.exeptions.EmailException;
import com.camada2.WearStore.exeptions.UsuarioInexistenteExeption;
import com.camada2.WearStore.service.impl.UsuarioServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario no existe");
    }
    @PostMapping
    public ResponseEntity<Usuarios> guardarUsuario(@RequestBody UsuariosDTO usuariosDTO) {
        Usuarios usuarioGuardado = usuarioServices.guardar(usuariosDTO);
        usuarioServices.generarVerificacionEmail(usuarioGuardado.getUser(), usuarioGuardado);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Usuarios>ActualizarUsuario(@RequestBody UsuariosDTO u ){
        usuarioServices.actualizar(u);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Usuarios>listarUsuarios(){
        return usuarioServices.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuarios>buscarUsuario(@PathVariable Integer id){
      Usuarios usuario= usuarioServices.buscar(id);
        if (usuario != null){
            return ResponseEntity.status(HttpStatus.OK).body(usuario);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }


    @GetMapping("/buscar")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<Usuarios> buscarPorMail(@RequestParam("mail") String mail){
        return ResponseEntity.ok(usuarioServices.buscarPorMail(mail));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id){
        usuarioServices.eliminar(id);
        return ResponseEntity.ok().build();
    }


}
