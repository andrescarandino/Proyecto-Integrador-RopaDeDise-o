package com.camada2.WearStore.service.impl;


import com.camada2.WearStore.entity.Roles;
import com.camada2.WearStore.util.ERole;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.exeptions.EmailException;
import com.camada2.WearStore.exeptions.UsuarioInexistenteExeption;
import com.camada2.WearStore.repository.UsuariosRepository;
import com.camada2.WearStore.service.IService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UsuarioServices implements IService<Usuarios, Usuarios>, UserDetailsService {

    @Autowired
    UsuariosRepository usuariosRepository;
    @Autowired
    MailServices mailServices;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    ObjectMapper mapper;


    @Override
    public Usuarios guardar(Usuarios usuarios) {


        Set<Roles> roles = usuarios.getRoles().stream()
                .map(rol -> new Roles(ERole.valueOf(rol.getNombre().name())))
                .collect(Collectors.toSet());

        Usuarios usuario = new Usuarios();
        usuario.setUser(usuario.getNombre() + usuario.getApellido());
        usuario.setNombre(usuario.getNombre());
        usuario.setApellido(usuario.getApellido());
        usuario.setEmail(usuario.getEmail());
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        usuario.setRoles(roles);

        return usuariosRepository.save(usuarios);

    }

    @Override
    public List<Usuarios> listar() {
        return usuariosRepository.findAll()
                .stream()
                .collect(Collectors.toList());
    }

    @Override
    public Usuarios buscar(Integer i) {
        return usuariosRepository.findById(i).orElse(null);

    }

    @Override
    public void eliminar(Integer i) {
        usuariosRepository.deleteById(i);

    }


    @Override
    public Usuarios actualizar(Usuarios usuarios) {

        Usuarios usuario = mapper.convertValue(usuarios, Usuarios.class);

        return usuariosRepository.save(usuario);
    }

    @Transactional
    public Usuarios generarVerificacionEmail(String user, Usuarios usuarios) {
        usuariosRepository.save(usuarios);
        Usuarios usuario = usuariosRepository.findByUser(user).orElseThrow(UsuarioInexistenteExeption::new);
        try {

            mailServices.sendEmail(usuario.getEmail(), "Corre de confirmacion de cuenta", "Te dejamos el link:" + "http://localhost:5173/users/login");
            usuariosRepository.save(usuario);
        } catch (Exception e) {
            throw new EmailException();
        }
        return usuariosRepository.save(usuario);
    }

public Usuarios buscarPorMail(String mail){

        Usuarios usuario = usuariosRepository.findUsuariosByEmail(mail).orElseThrow(UsuarioInexistenteExeption::new);
        usuario.setPassword("");

        return usuario;
}


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
