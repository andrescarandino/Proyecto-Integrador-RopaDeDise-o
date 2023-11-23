package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.Favorito;
import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Usuarios;
import com.camada2.WearStore.repository.FavoritoRepository;
import com.camada2.WearStore.repository.ProductosRepository;
import com.camada2.WearStore.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoritoService {
    @Autowired
    private FavoritoRepository favoritoRepository;

    @Autowired
    private UsuariosRepository usuariosRepository;

    @Autowired
    private ProductosRepository productosRepository;

    public List<Productos> listar(int usuarioId) {
        Optional<Usuarios> optionalUsuario = usuariosRepository.findById(usuarioId);

        if (optionalUsuario.isPresent()) {
            Usuarios usuario = optionalUsuario.get();

            Favorito favorito1 = new Favorito();
            favorito1.setUsuario(usuario);
            return favoritoRepository.findProductosByUsuario(favorito1.getUsuario());
        }
        return null;
    }

    public Favorito guardar(int usuarioId, int productoId) {

        Optional<Usuarios> optionalUsuario = usuariosRepository.findById(usuarioId);
        Optional<Productos> optionalProducto = productosRepository.findById(productoId);

        if (optionalUsuario.isPresent() && optionalProducto.isPresent()) {
            Usuarios usuario = optionalUsuario.get();
            Productos producto = optionalProducto.get();

            Favorito favorito1 = new Favorito();
            favorito1.setUsuario(usuario);
            favorito1.setProducto(producto);

            return favoritoRepository.save(favorito1);
        }

        return null;
    }


    public String eliminar(int usuarioId, int productoId) {
         favoritoRepository.eliminarFavoritoPorUsuarioYProducto(usuarioId, productoId);
        return "eliminado";
    }

}