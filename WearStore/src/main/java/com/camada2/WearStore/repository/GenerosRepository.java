package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Generos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface GenerosRepository extends JpaRepository<Generos, Integer> {

    // Ejemplo de consulta personalizada para buscar géneros por nombre
    @Query("SELECT g FROM Generos g WHERE g.nombre = :nombre")
    List<Generos> findGenerosByNombre(String nombre);
}
