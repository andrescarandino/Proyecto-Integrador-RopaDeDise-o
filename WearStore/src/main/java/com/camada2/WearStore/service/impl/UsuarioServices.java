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
public class UsuarioServices implements IService<Usuarios, Usuarios>, UserDetailsService {

    @Autowired
    UsuariosRepository usuariosRepository;

    @Autowired
    MailServices mailServices;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public Usuarios guardar(Usuarios usuarios) {
        usuarios.setUser(usuarios.getNombre() + usuarios.getApellido());

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
        return null;
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


    public Usuarios createUser(UsuariosDTO usuariosDTO) {


        Set<TipoUsuarios> roles = usuariosDTO.getRoles().stream()
                .map(rol -> new TipoUsuarios(ERole.valueOf(rol)))
                .collect(Collectors.toSet());

        Usuarios usuarios = new Usuarios();
        usuarios.setNombre(usuariosDTO.getNombre());
        usuarios.setApellido(usuariosDTO.getApellido());
        usuarios.setEmail(usuariosDTO.getEmail());
        usuarios.setPassword(passwordEncoder.encode(usuariosDTO.getPassword()));
        usuarios.setRoles(roles);

        return usuariosRepository.save(usuarios);
    }

    public void deleteUser(Integer id) {
        usuariosRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Usuarios usuario = usuariosRepository.findUsuariosByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("El usuario " + username + " no existe"));

        Collection<? extends GrantedAuthority> authorities = usuario.getRoles()
                .stream()
                .map(rol -> new SimpleGrantedAuthority("ROLE_".concat(rol.getNombre().name())))
                .collect(Collectors.toSet());

        return new User(usuario.getEmail(), usuario.getPassword(), true, true, true, true, authorities);
    }
}
