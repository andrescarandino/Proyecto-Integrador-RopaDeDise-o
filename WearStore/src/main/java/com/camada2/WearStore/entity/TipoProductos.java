package com.camada2.WearStore.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TipoProductos")
public class TipoProductos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipoProductos")
    private int idTipoProductos;

    @Column(name = "nombre")
    private String nombre;

    // insertable = false,updatable = false, significa que desde tipoProductos no puede insertar,
    // borrar o cambiar el nombre de una NUEVA categoria
    @ManyToOne
    @JoinColumn(name = "id_categorias", insertable = false, updatable = false)
    private Categorias categorias;

    public TipoProductos() {
        // Constructor por defecto
    }

    public int getIdTipoProductos() {
        return idTipoProductos;
    }

    public void setIdTipoProductos(int idTipoProductos) {
        this.idTipoProductos = idTipoProductos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Categorias getCategorias() {
        return categorias;
    }

    public void setCategorias(Categorias categorias) {
        this.categorias = categorias;
    }
}
