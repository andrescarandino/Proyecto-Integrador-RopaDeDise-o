package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TipoUsuarios")
public class TipoUsuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipoUsuarios")
    private int idTipoUsuarios;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    // Constructores, getters y setters

    public TipoUsuarios() {
        // Constructor por defecto
    }

    public int getIdTipoUsuarios() {
        return idTipoUsuarios;
    }

    public void setIdTipoUsuarios(int idTipoUsuarios) {
        this.idTipoUsuarios = idTipoUsuarios;
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
}

