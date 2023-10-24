package com.camada2.WearStore.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Reservas")
public class Reservas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idReservas")
    private int idReservas;

    @Column(name = "fecha")
    private Date fecha;

    @ManyToOne
    @JoinColumn(name = "Usuarios_idUsuarios")
    private Usuarios usuario;

    // Constructores, getters y setters

    public Reservas() {
        // Constructor por defecto
    }

    public int getIdReservas() {
        return idReservas;
    }

    public void setIdReservas(int idReservas) {
        this.idReservas = idReservas;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }
}

