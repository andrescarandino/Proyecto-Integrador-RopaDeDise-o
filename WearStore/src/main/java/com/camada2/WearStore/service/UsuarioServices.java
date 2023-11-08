package com.camada2.WearStore.service;

import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.exeptions.EmailException;
import com.camada2.WearStore.exeptions.UsuarioInexistenteExeption;
import com.camada2.WearStore.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioServices implements IService<Usuarios,Usuarios> {

    @Autowired
    UsuariosRepository usuariosRepository;

    @Autowired
    MailServices mailServices;

    @Transactional
    @Override
    public Usuarios guardar(Usuarios usuarios) {

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
    @Transactional
    public Usuarios generarVerificacionEmail(String user, Usuarios usuarios){
        usuariosRepository.save(usuarios);
        Usuarios usuario=usuariosRepository.findByUser(user).orElseThrow(UsuarioInexistenteExeption::new);
       try {

           mailServices.sendEmail(usuario.getEmail(), "Corre de confirmacion de cuenta", "Te dejamos el link");
           usuariosRepository.save(usuario);
       }catch (Exception e){
           throw new EmailException();
       }
         return usuariosRepository.save(usuario);
    }

}