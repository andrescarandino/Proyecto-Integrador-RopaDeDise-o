package com.camada2.WearStore.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="caracteristica")

public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_caracteristica")
    private int idCaracteristica;

    private String nombre;
    private String descripcion;
    private String rutaIcono;

    @OneToMany(mappedBy = "caracteristica")
    private List<CaracteristicasProducto> caracteristicasList;

    //Constructor
    public Caracteristica() {

    }

    //getter y setter


    public int getIdCaracteristica() {
        return idCaracteristica;
    }

    public void setIdCaracteristica(int idCaracteristica) {
        this.idCaracteristica = idCaracteristica;
    }

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

    public List<CaracteristicasProducto> getCaracteristicasList() {
        return caracteristicasList;
    }

    public void setCaracteristicasList(List<CaracteristicasProducto> caracteristicasList) {
        this.caracteristicasList = caracteristicasList;
    }
}
