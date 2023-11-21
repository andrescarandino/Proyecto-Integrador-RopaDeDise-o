package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.TipoUsuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TipoUsuariosRepository extends JpaRepository<TipoUsuarios, Integer> {

    // Ejemplo de consulta personalizada para buscar tipos de usuarios por nombre
    @Query("SELECT tu FROM TipoUsuarios tu WHERE tu.rol = :rol")
    List<TipoUsuarios> findTipoUsuariosByNombre(String rol);
}

