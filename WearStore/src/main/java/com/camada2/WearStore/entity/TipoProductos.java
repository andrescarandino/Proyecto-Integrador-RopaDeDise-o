package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TipoProductos")
public class TipoProductos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipoProductos")
    private int idTipoProductos;

    @Column(name = "nombre")
    private String nombre;

    // Constructores, getters y setters

    public TipoProductos() {
        // Constructor por defecto
    }

    public int getIdTipoProductos() {
        return idTipoProductos;
    }

    public void setIdTipoProductos(int idTipoProductos) {
        this.idTipoProductos = idTipoProductos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

