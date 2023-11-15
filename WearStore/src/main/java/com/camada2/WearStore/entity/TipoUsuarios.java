package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TipoUsuarios")
public class TipoUsuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipoUsuarios")
    private int idTipoUsuarios;

    @Enumerated(EnumType.STRING)
    private ERole nombre;

    // Constructores, getters y setters

    public TipoUsuarios() {
        // Constructor por defecto
    }

    public TipoUsuarios(int idTipoUsuarios, ERole nombre) {
        this.idTipoUsuarios = idTipoUsuarios;
        this.nombre = nombre;
    }

    public int getIdTipoUsuarios() {
        return idTipoUsuarios;
    }

    public void setIdTipoUsuarios(int idTipoUsuarios) {
        this.idTipoUsuarios = idTipoUsuarios;
    }

    public ERole getNombre() {
        return nombre;
    }

    public void setNombre(ERole nombre) {
        this.nombre = nombre;
    }
}

