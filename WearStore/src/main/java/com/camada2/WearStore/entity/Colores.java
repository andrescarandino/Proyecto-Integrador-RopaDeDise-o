package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Colores")
public class Colores {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idColores")
    private int idColores;

    @Column(name = "nombre")
    private String nombre;

    // Constructores, getters y setters

    public Colores() {
        // Constructor por defecto
    }

    public int getIdColores() {
        return idColores;
    }

    public void setIdColores(int idColores) {
        this.idColores = idColores;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
