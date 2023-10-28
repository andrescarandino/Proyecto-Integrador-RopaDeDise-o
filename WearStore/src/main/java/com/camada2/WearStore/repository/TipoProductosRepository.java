package com.camada2.WearStore.repository;


import com.camada2.WearStore.entity.TipoProductos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TipoProductosRepository extends JpaRepository<TipoProductos, Integer> {

    // Ejemplo de consulta personalizada para buscar tipos de productos por nombre
    @Query("SELECT tp FROM TipoProductos tp WHERE tp.nombre = :nombre")
    List<TipoProductos> findTipoProductosByNombre(String nombre);
}
