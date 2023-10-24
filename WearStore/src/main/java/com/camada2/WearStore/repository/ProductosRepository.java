package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface ProductosRepository extends JpaRepository<Productos, Integer> {

    // Ejemplo de consulta personalizada para buscar productos por nombre
    @Query("SELECT p FROM Productos p WHERE p.nombre = :nombre")
    List<Productos> findProductosByNombre(String nombre);
}

