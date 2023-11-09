package com.camada2.WearStore.Dto;

public class TipoProductosDTO {
    private Integer idTipoProductos;
    private String nombre;
    private Integer idCategorias;  // La clave foránea

    public Integer getIdTipoProductos() {
        return idTipoProductos;
    }

    public void setIdTipoProductos(Integer idTipoProductos) {
        this.idTipoProductos = idTipoProductos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getIdCategorias() {
        return idCategorias;
    }

    public void setIdCategorias(Integer idCategorias) {
        this.idCategorias = idCategorias;
    }
}
