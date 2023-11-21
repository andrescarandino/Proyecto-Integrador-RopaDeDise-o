package com.camada2.WearStore.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class CaracteristicasProductoPK implements Serializable {

    @Column(name = "id_caracteristica")
    private Integer idCaracteristica;

    @Column(name = "id_productos")
    private Integer idProducto;

    //getter y setter

    public Integer getIdCaracteristica() {
        return idCaracteristica;
    }

    public void setIdCaracteristica(Integer idCaracteristica) {
        this.idCaracteristica = idCaracteristica;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }


}
