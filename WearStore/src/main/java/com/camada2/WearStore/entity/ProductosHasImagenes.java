package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ProductosHasImagenes")
public class ProductosHasImagenes {

    @Id
    @ManyToOne
    @JoinColumn(name = "Productos_idProductos")
    private Productos productos;

    @Id
    @ManyToOne
    @JoinColumn(name = "Imagenes_IdImagenes")
    private Imagenes imagenes;

    // Constructores, getters y setters

    public ProductosHasImagenes() {
        // Constructor por defecto
    }

    public Productos getProductos() {
        return productos;
    }

    public void setProductos(Productos productos) {
        this.productos = productos;
    }

    public Imagenes getImagenes() {
        return imagenes;
    }

    public void setImagenes(Imagenes imagenes) {
        this.imagenes = imagenes;
    }
}

