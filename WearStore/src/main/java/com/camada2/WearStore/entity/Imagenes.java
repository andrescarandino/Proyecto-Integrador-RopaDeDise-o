package com.camada2.WearStore.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Imagenes")
public class Imagenes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idImagenes")
    private int idImagenes;

    @Column(name = "ruta")
    private String ruta;

    @Column(name = "titulo")
    private String titulo;


    // Constructores, getters y setters

    public Imagenes() {
        // Constructor por defecto
    }

    public Imagenes(String ruta, String titulo) {
        this.idImagenes = idImagenes;
        this.ruta = ruta;
        this.titulo = titulo;

    }

    public int getIdImagenes() {
        return idImagenes;
    }

    public void setIdImagenes(int idImagenes) {
        this.idImagenes = idImagenes;
    }

    public String getRuta() {
        return ruta;
    }

    public void setRuta(String ruta) {
        this.ruta = ruta;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }


}

