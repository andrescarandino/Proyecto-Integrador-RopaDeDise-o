package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.lang.String;
import java.util.List;

@Repository
public interface ProductosRepository extends JpaRepository<Productos, Integer> {


    // Ejemplo de consulta personalizada para buscar productos por nombre
    @Query("SELECT p FROM Productos p WHERE "
            + " CONCAT(p.nombre, p.descripcion) LIKE %?1% "
            + " OR CAST(p.precio AS STRING) LIKE %?1% "
            + " OR CAST(p.id AS STRING) LIKE %?1% ")

    List<Productos> findAll(String palabraClave);
}

