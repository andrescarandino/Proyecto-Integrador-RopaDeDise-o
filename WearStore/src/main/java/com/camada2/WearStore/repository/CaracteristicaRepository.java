package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Integer> {
    @Query("SELECT c FROM Caracteristica c WHERE LOWER(c.nombre) LIKE LOWER(CONCAT('%', :nombre, '%'))")
    List<Caracteristica> findByNombre(@Param("nombre") String nombre);

    //List<Caracteristica> findByNombre(String nombre);
}
