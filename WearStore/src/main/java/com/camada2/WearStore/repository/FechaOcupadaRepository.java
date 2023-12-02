package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.FechaOcupada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FechaOcupadaRepository extends JpaRepository<FechaOcupada, Long> {
}
