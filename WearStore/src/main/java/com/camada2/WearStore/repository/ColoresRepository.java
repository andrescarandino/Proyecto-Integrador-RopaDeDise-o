package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Colores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface ColoresRepository extends JpaRepository<Colores, Integer> {

    // Ejemplo de consulta personalizada para buscar colores por nombre
    @Query("SELECT c FROM Colores c WHERE c.nombre = :nombre")
    List<Colores> findColoresByNombre(String nombre);
}

