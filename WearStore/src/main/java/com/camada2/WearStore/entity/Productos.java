package com.camada2.WearStore.entity;

import jakarta.persistence.*;



@Entity
@Table(name = "Productos")

public class Productos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "idProductos")
    private Integer idProductos;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "precio")
    private Double precio;

    @Column(name = "cantidad")
    private String cantidad; //recominedo revisar en bd esta como string

    @Column(name = "fechaCreacion")
    private String fechaCreacion; // revisar en bd esta como string

    @ManyToOne
    @JoinColumn(name = "TipoProductos_idTipoProductos")
    private TipoProductos tipoProductos;

    @ManyToOne
    @JoinColumn(name = "Generos_idGeneros")
    private Generos generos;

    @ManyToOne
    @JoinColumn(name = "Colores_idColores")
    private Colores colores;

    @ManyToOne
    @JoinColumn(name = "Tallas_idTallas")
    private Tallas tallas;

    @ManyToOne
    @JoinColumn(name = "Categorias_idCategorias")
    private Categorias categorias;

    // Constructores, getters y setters

    public Productos() {
        // Constructor por defecto
    }

    // Getters y setters

    public int getIdProductos() {
        return idProductos;
    }

    public void setIdProductos(int idProductos) {
        this.idProductos = idProductos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public TipoProductos getTipoProductos() {
        return tipoProductos;
    }

    public void setTipoProductos(TipoProductos tipoProductos) {
        this.tipoProductos = tipoProductos;
    }

    public Generos getGeneros() {
        return generos;
    }

    public void setGeneros(Generos generos) {
        this.generos = generos;
    }

    public Colores getColores() {
        return colores;
    }

    public void setColores(Colores colores) {
        this.colores = colores;
    }

    public Tallas getTallas() {
        return tallas;
    }

    public void setTallas(Tallas tallas) {
        this.tallas = tallas;
    }

    public Categorias getCategorias() {
        return categorias;
    }

    public void setCategorias(Categorias categorias) {
        this.categorias = categorias;
    }
}
