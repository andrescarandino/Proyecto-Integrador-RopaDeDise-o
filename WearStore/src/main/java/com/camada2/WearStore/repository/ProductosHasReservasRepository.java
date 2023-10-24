package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.ProductosHasReservas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface ProductosHasReservasRepository extends JpaRepository<ProductosHasReservas, Integer> {

    // Ejemplo de consulta personalizada para buscar productos por reserva
    @Query("SELECT pr FROM ProductosHasReservas pr WHERE pr.Reservas_idReservas = :reservaId")
    List<ProductosHasReservas> findProductosByReservaId(Integer reservaId);
}

