package com.camada2.WearStore.service;

import com.camada2.WearStore.entity.Colores;

import java.util.List;

public interface IService <T, E>{

    public E guardar(T t);



    public List<E> listar();

    public E buscar(Integer i);

    public void eliminar(Integer i);

}
