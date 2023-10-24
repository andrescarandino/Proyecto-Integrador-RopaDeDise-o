package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ProductosHasReservas")
public class ProductosHasReservas {

    @Id
    @ManyToOne
    @JoinColumn(name = "Productos_idProductos")
    private Productos productos;

    @Id
    @ManyToOne
    @JoinColumn(name = "Reservas_idReservas")
    private Reservas reservas;

    @ManyToOne
    @JoinColumn(name = "Usuarios_idUsuarios")
    private Usuarios usuarios;

    // Constructores, getters y setters

    public ProductosHasReservas() {
        // Constructor por defecto
    }

    public Productos getProductos() {
        return productos;
    }

    public void setProductos(Productos productos) {
        this.productos = productos;
    }

    public Reservas getReservas() {
        return reservas;
    }

    public void setReservas(Reservas reservas) {
        this.reservas = reservas;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }
}

