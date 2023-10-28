package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Integer> {

    // Ejemplo de consulta personalizada para buscar usuarios por email
    @Query("SELECT u FROM Usuarios u WHERE u.email = :email")
    List<Usuarios> findUsuariosByEmail(String email);
}

