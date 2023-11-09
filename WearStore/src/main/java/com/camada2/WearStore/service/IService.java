package com.camada2.WearStore.service;

import java.util.List;

public interface IService <T, E>{

    public E guardar(T t) throws Exception;



    public List<E> listar();

    public E buscar(Integer i);

    public void eliminar(Integer i);

}
