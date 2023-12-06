package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TipoUsuarios")
public class TipoUsuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipoUsuarios")
    private int idTipoUsuarios;

    private String rol;

    // Constructores, getters y setters

    public TipoUsuarios() {
        // Constructor por defecto
    }

    public TipoUsuarios(String rol) {

        this.rol = rol;
    }


    public int getIdTipoUsuarios() {
        return idTipoUsuarios;
    }

    public void setIdTipoUsuarios(int idTipoUsuarios) {
        this.idTipoUsuarios = idTipoUsuarios;
    }

    public String getNombre() {
        return rol;
    }

    public void setNombre(String rol) {
        this.rol = rol;
    }
}

