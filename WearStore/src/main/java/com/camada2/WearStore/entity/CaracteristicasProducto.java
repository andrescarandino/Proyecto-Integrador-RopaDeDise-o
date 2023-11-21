package com.camada2.WearStore.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "Caracteristicas_producto")
public class CaracteristicasProducto {

    @EmbeddedId
    private CaracteristicasProductoPK id;

    @ManyToOne
    @JoinColumn (name = "id_caracteristica", insertable = false, updatable = false)
    private Caracteristica caracteristica;

    @ManyToOne
    @JoinColumn(name = "id_productos",insertable = false, updatable = false )
    private Productos producto;

    //getter y setter
    public CaracteristicasProductoPK getId() {
        return id;
    }

    public void setId(CaracteristicasProductoPK id) {
        this.id = id;
    }

    public Caracteristica getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(Caracteristica caracteristica) {
        this.caracteristica = caracteristica;
    }

    public Productos getProducto() {
        return producto;
    }

    public void setProducto(Productos producto) {
        this.producto = producto;
    }
}
