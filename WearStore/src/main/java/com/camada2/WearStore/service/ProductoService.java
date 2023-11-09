package com.camada2.WearStore.service;

import com.camada2.WearStore.entity.Productos;
import com.camada2.WearStore.repository.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductoService implements IService <Productos, Productos>{

    @Autowired
    private ProductosRepository productosRepository;


    public Productos guardar(Productos productos) throws Exception {

        List<Productos> listaProductos = productosRepository.findAll();
        String nombreProducto = productos.getNombre();
        if (!listaProductos.isEmpty()) {
            for (Productos cadaProducto : listaProductos) {
                String cadaNombre = cadaProducto.getNombre();
                if (cadaNombre.equals(nombreProducto)) {
                    throw new Exception("El nombre del producto ya existe");
                }
            }
        }
        return productosRepository.save(productos);
    }

    public List<Productos> listar(){

        return productosRepository.findAll()
                .stream()
                .collect(Collectors.toList());
    }

    public Productos buscar(Integer id){
        return productosRepository.findById(id).orElse(null);
    }

   public void eliminar(Integer id){
        productosRepository.deleteById(id);
   }

   public Productos actualizar(Productos productos){
        return productosRepository.save(productos);
   }


}
