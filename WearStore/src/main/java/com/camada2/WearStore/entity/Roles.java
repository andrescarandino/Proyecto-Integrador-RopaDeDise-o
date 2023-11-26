package com.camada2.WearStore.entity;

import com.camada2.WearStore.util.ERole;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Roles")
public class Roles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idRoles")
    private int idRoles;

    @Enumerated(EnumType.STRING)
    private ERole nombre;


    // Constructores, getters y setters

    public Roles() {
        // Constructor por defecto
    }

    public Roles(ERole roles) {

        this.nombre = roles;
    }


    public ERole getNombre() {
        return nombre;
    }

    public void setNombre(ERole nombre) {
        this.nombre = nombre;
    }


}

