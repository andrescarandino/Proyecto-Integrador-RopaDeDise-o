package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Categorias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface CategoriasRepository extends JpaRepository<Categorias, Integer> {

    // Ejemplo de consulta personalizada para buscar categorías por nombre
    @Query("SELECT c FROM Categorias c WHERE c.nombre = :nombre")
    List<Categorias> findCategoriasByNombre(String nombre);
}

