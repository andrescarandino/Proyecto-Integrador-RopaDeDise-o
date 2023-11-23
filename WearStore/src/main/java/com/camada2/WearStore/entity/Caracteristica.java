package com.camada2.WearStore.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="caracteristica")

public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCaracteristica")
    private int idCaracteristica;

    private String nombre;
    private String descripcion;
    private String rutaIcono;

    @ManyToMany(mappedBy = "caracteristica")
    private List<Productos> productos;

    //Constructor

    public Caracteristica(int idCaracteristica, String nombre, String descripcion, String rutaIcono, List<Productos> productos) {
        this.idCaracteristica = idCaracteristica;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.rutaIcono = rutaIcono;
        this.productos = productos;
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

    public List<Productos> getProductos() {
        return productos;
    }

    public void setProductos(List<Productos> productos) {
        this.productos = productos;
    }
}
