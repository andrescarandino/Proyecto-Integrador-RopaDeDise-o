package com.camada2.WearStore.entity;



import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "FechasOcupadas")
public class FechaOcupada {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fecha_inicio")
    @Temporal(TemporalType.DATE)
    private Date fechaInicio;

    @Column(name = "fecha_fin")
    @Temporal(TemporalType.DATE)
    private Date fechaFin;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Productos producto;
    // Constructor, getters y setters


    public FechaOcupada() {
    }


    public FechaOcupada(Productos producto, Date fechaInicio, Date fechaFin) {
        this.producto = producto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public void setProducto(Productos producto) {

    this.producto=producto;
    }
}