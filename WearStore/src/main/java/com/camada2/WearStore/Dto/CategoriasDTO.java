package com.camada2.WearStore.Dto;

public class CategoriasDTO {
    private Integer id;
    private String nombre;


    // constructor
    public CategoriasDTO() {

    }

    public CategoriasDTO(Integer id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    // Getter setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

