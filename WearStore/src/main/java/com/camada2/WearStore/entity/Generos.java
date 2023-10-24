package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Generos")
public class Generos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idGeneros")
    private int idGeneros;

    @Column(name = "nombre")
    private String nombre;

    // Constructores, getters y setters

    public Generos() {
        // Constructor por defecto
    }

    public int getIdGeneros() {
        return idGeneros;
    }

    public void setIdGeneros(int idGeneros) {
        this.idGeneros = idGeneros;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}