package com.camada2.WearStore.service.impl;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.repository.ProductosRepository;
import com.camada2.WearStore.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ProductoService implements IService<Productos, Productos> {

    @Autowired
    private ProductosRepository productosRepository;


    @Override
    public Productos guardar(Productos productos) throws IOException {
        List<Productos> listaProductos = productosRepository.findAll();
        String nombreProducto = productos.getNombre();
        if (!listaProductos.isEmpty()) {
            for (Productos cadaProducto : listaProductos) {
                String cadaNombre = cadaProducto.getNombre();
                if (cadaNombre.equals(nombreProducto)) {
                    throw new IOException("El nombre del producto ya existe");
                }
            }
        }
        return productosRepository.save(productos);
    }

    public List<Productos> listar(){
        return productosRepository.findAll();
    }

    public Productos buscar(Integer id){
        return productosRepository.findById(id).orElse(null);
    }

    public void eliminar(Integer id) throws IOException {
        productosRepository.deleteById(id);
    }

    public Productos actualizar(Productos productos) {
        return productosRepository.save(productos);
    }

    public List<Productos> buscarPorAtributo(String palabraClave) {
        return (palabraClave != null) ? productosRepository.findAll(palabraClave) : productosRepository.findAll();
    }



}







