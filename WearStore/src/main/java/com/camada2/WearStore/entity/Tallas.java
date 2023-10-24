package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Tallas")
public class Tallas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTallas")
    private int idTallas;

    @Column(name = "nombre")
    private String nombre;

    // Constructores, getters y setters

    public Tallas() {
        // Constructor por defecto
    }

    public int getIdTallas() {
        return idTallas;
    }

    public void setIdTallas(int idTallas) {
        this.idTallas = idTallas;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

