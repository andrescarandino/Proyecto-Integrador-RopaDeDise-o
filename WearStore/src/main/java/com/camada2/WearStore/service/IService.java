package com.camada2.WearStore.service;

import com.camada2.WearStore.entity.Productos;

import java.io.IOException;
import java.util.List;

public interface IService <T, E>{

    public E guardar(T t) throws IOException;

    public List<E> listar();

    public E buscar(Integer i);

    public void eliminar(Integer i) throws IOException;

    public E actualizar(T t);

}
