package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Imagenes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagenesRepository extends JpaRepository<Imagenes, Integer> {

    // Ejemplo de consulta personalizada para buscar imágenes por título
    @Query("SELECT i FROM Imagenes i WHERE i.titulo = :titulo")
    List<Imagenes> findImagenesByTitulo(String titulo);
}

