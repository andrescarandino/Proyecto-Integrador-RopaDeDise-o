package com.camada2.WearStore.repository;

import com.camada2.WearStore.entity.ProductosHasImagenes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface ProductosHasImagenesRepository extends JpaRepository<ProductosHasImagenes, Integer> {

    // Ejemplo de consulta personalizada para buscar imágenes por producto
    @Query("SELECT pi FROM ProductosHasImagenes pi WHERE pi.Productos_idProductos = :productoId")
    List<ProductosHasImagenes> findImagenesByProductoId(Integer productoId);
}

