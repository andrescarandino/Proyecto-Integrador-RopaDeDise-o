package com.camada2.WearStore.service;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.repository.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    @Autowired
    ProductosRepository productosRepository;

    public Productos guardarProductos(Productos productos){
        return productosRepository.save(productos);
    }

    public List<Productos> listarProductos(){

        return productosRepository.findAll();
    }

    public Productos listarProductoByid(Integer id){
        return productosRepository.findById(id).orElse(null);
    }

   public void eliminarProducto(Integer id){
        productosRepository.deleteById(id);
   }
}
