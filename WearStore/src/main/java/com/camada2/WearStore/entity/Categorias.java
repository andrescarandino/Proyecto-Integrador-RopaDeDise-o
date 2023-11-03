package com.camada2.WearStore.entity;

import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "Categorias")
public class Categorias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCategorias")
    private int idCategorias;

    @Column(name = "nombre")
    private String nombre;

    @OneToMany(mappedBy = "categorias")
    private List<TipoProductos> tipoProductosList;

    // Constructores, getters y setters

    public Categorias() {
        // Constructor por defecto
    }

    public int getIdCategorias() {
        return idCategorias;
    }

    public void setIdCategorias(int idCategorias) {
        this.idCategorias = idCategorias;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
