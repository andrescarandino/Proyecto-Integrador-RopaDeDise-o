package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.entity.Reservas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ReservasRepository extends JpaRepository<Reservas, Integer> {

    // Ejemplo de consulta personalizada para buscar reservas por usuario
    List<Reservas> findByProductoAndFechaFinAfterAndFechaInicioBefore(
            Productos producto,
            Date fechaInicio,
            Date fechaFin
    );



    List<Reservas> findByUsuarioEmail(String email);

}
