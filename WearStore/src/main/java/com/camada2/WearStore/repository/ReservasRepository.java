package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.Reservas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservasRepository extends JpaRepository<Reservas, Integer> {

    // Ejemplo de consulta personalizada para buscar reservas por usuario

}
