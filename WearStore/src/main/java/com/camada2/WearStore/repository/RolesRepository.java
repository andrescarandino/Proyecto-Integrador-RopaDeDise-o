package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Integer> {

    // Ejemplo de consulta personalizada para buscar tipos de usuarios por nombre
    @Query("SELECT r FROM Roles r WHERE r.nombre = :nombre")
    List<Roles> findRolesByNombre(String nombre);
}

