package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.Dto.UsuariosDTO;
import com.camada2.WearStore.entity.ERole;
import com.camada2.WearStore.entity.TipoUsuarios;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.exeptions.EmailException;
import com.camada2.WearStore.exeptions.UsuarioInexistenteExeption;
import com.camada2.WearStore.repository.UsuariosRepository;
import com.camada2.WearStore.service.IService;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UsuarioServices implements IService<UsuariosDTO, Usuarios>, UserDetailsService {

    @Autowired
    UsuariosRepository usuariosRepository;
    @Autowired
    MailServices mailServices;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    ObjectMapper mapper;


    @Override
    public Usuarios guardar(UsuariosDTO usuariosDTO) {


        List<TipoUsuarios> roles = usuariosDTO.getRoles().stream()
                .map(rol -> new TipoUsuarios(ERole.valueOf(rol)))
                .collect(Collectors.toList());

        Usuarios usuarios = new Usuarios();
        usuarios.setUser(usuariosDTO.getNombre() + usuariosDTO.getApellido());
        usuarios.setNombre(usuariosDTO.getNombre());
        usuarios.setApellido(usuariosDTO.getApellido());
        usuarios.setEmail(usuariosDTO.getEmail());
        usuarios.setPassword(passwordEncoder.encode(usuariosDTO.getPassword()));
        usuarios.setRoles(roles);

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
    public Usuarios actualizar(UsuariosDTO usuariosDTO) {

        Usuarios usuario = mapper.convertValue(usuariosDTO, Usuarios.class);

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
    public Usuarios createUser(UsuariosDTO usuariosDTO) {


        List<TipoUsuarios> roles = usuariosDTO.getRoles().stream()
                .map(rol -> new TipoUsuarios(ERole.valueOf(rol)))
                .collect(Collectors.toList());

        Usuarios usuarios = new Usuarios();
        usuarios.setNombre(usuariosDTO.getNombre());
        usuarios.setApellido(usuariosDTO.getApellido());
        usuarios.setEmail(usuariosDTO.getEmail());
        usuarios.setPassword(passwordEncoder.encode(usuariosDTO.getPassword()));
        usuarios.setRoles(roles);

        return usuariosRepository.save(usuarios);
    }

    public Collection<GrantedAuthority> mapToAuthorities(List<TipoUsuarios> roles){
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getNombre().name())).collect(Collectors.toList());
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Usuarios usuario = usuariosRepository.findUsuariosByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("El usuario " + email + " no existe"));

        return new User(usuario.getEmail(), usuario.getPassword(),mapToAuthorities(usuario.getRoles()));
    }
}
