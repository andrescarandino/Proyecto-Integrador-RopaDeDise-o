package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Favorito;
import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Usuarios;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Integer> {

    @Query("SELECT f.productosId FROM Favorito as f WHERE f.usuariosId = :usuario")
    List<Productos> findProductosByUsuario(@Param("usuario") Usuarios usuario);

    @Modifying
    @Transactional
    @Query("DELETE FROM Favorito f WHERE f.usuariosId.idUsuarios = :usuarioId AND f.productosId.idProductos = :productoId")
    void eliminarFavoritoPorUsuarioYProducto(@Param("usuarioId") int usuarioId, @Param("productoId") int productoId);


}
