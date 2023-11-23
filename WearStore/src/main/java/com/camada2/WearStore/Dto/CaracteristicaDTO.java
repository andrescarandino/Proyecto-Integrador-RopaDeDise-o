package com.camada2.WearStore.Dto;

public class CaracteristicaDTO {

    private String nombre;
    private String descripcion;
    private String rutaIcono;



    public CaracteristicaDTO() {
        // Constructor vacío
    }



    // Getters y setters

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getRutaIcono() {
        return rutaIcono;
    }

    public void setRutaIcono(String rutaIcono) {
        this.rutaIcono = rutaIcono;
    }
}

