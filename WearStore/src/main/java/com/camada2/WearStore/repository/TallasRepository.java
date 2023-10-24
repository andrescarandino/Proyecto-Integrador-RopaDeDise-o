package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Tallas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface TallasRepository extends JpaRepository<Tallas, Integer> {

    // Ejemplo de consulta personalizada para buscar tallas por nombre
    @Query("SELECT t FROM Tallas t WHERE t.nombre = :nombre")
    List<Tallas> findTallasByNombre(String nombre);
}
