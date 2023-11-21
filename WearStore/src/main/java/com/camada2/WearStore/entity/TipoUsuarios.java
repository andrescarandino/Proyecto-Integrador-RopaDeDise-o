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
    private ERole rol;

    // Constructores, getters y setters

    public TipoUsuarios() {
        // Constructor por defecto
    }

    public TipoUsuarios(ERole rol) {

        this.rol = rol;
    }


    public int getIdTipoUsuarios() {
        return idTipoUsuarios;
    }

    public void setIdTipoUsuarios(int idTipoUsuarios) {
        this.idTipoUsuarios = idTipoUsuarios;
    }

    public ERole getNombre() {
        return rol;
    }

    public void setNombre(ERole rol) {
        this.rol = rol;
    }
}

