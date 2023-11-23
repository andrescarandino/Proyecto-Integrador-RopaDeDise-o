package com.camada2.WearStore.entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Reservas")
public class Reservas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idReservas")
    private Integer idReservas;

    @Column(name = "fecha_inicio")
    private Date fechaInicio;

    @Column(name = "fecha_fin")
    private Date fechaFin;

    @ManyToOne
    @JoinColumn(name = "Usuarios_idUsuarios")
    private Usuarios usuario;

    @ManyToMany(mappedBy = "reservas", fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private List<Productos> productos;

    // Constructores, getters y setters

    public Reservas() {
        // Constructor por defecto
    }
    public Reservas(Date fechaInicio, Date fechaFin, Usuarios usuario, List<Productos> productos) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.usuario = usuario;
        this.productos = productos;
    }


    public int getIdReservas() {
        return idReservas;
    }

    public void setIdReservas(int idReservas) {
        this.idReservas = idReservas;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public List<Productos> getProductos() {
        return productos;
    }

    public void setProductos(List<Productos> productos) {
        this.productos = productos;
    }
}

