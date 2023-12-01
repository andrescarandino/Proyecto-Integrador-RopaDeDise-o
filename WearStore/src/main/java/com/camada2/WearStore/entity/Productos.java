package com.camada2.WearStore.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;


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
    private Integer cantidad;

    @Column(name = "fechaCreacion")
    @CreationTimestamp
    private Calendar fechaCreacion;

    @Column(name = "fechaModificacion")
    @UpdateTimestamp
    private Calendar fechaModificacion;

    @Column(name = "fechaEliminacion")
    @Timestamp
    private Calendar fechaEliminacion;

    @ManyToOne
    @JoinColumn(name = "idTipoProductos")
    private TipoProductos tipoProductos;

    @ManyToOne
    @JoinColumn(name = "idGeneros")
    private Generos generos;

    @ManyToOne
    @JoinColumn(name = "idColores")
    private Colores colores;

    @ManyToOne
    @JoinColumn(name = "idTallas")
    private Tallas tallas;

    @ManyToOne
    @JoinColumn(name = "idCategorias")
    private Categorias categorias;


    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private List<Reservas> reservas;

    @OneToMany
    @JoinColumn (name = "producto_id")
    private List<Imagenes> imagenes;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FechaOcupada> fechasOcupadas = new ArrayList<>();

    // Constructores, getters y setters

    public Productos() {
        // Constructor por defecto
    }

    public Productos(String nombre, String descripcion, Double precio, Integer cantidad, Calendar fechaCreacion, Calendar fechaModificacion, Calendar fechaEliminacion, TipoProductos tipoProductos, Generos generos, Colores colores, Tallas tallas, Categorias categorias, List<Reservas> reservas, List<Imagenes> imagenes,List<FechaOcupada>fechaOcupada) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
        this.fechaEliminacion = fechaEliminacion;
        this.tipoProductos = tipoProductos;
        this.generos = generos;
        this.colores = colores;
        this.tallas = tallas;
        this.categorias = categorias;
        this.reservas = reservas;
        this.imagenes = imagenes;
        this.fechasOcupadas=fechaOcupada;
    }

    // Getters y setters


    public List<FechaOcupada> getFechasOcupadas() {
        return fechasOcupadas;
    }

    public void setFechasOcupadas(List<FechaOcupada> fechasOcupadas) {
        this.fechasOcupadas = fechasOcupadas;
    }

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

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
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

    public List<Reservas> getReservas() {
        return reservas;
    }
    public void agregarReserva(Reservas reserva) {
        if (reservas == null) {
            reservas = new ArrayList<>();
        }
        reservas.add(reserva);
    }

    public void setReservas(List<Reservas> reservas) {
        this.reservas = reservas;
    }

    public List<Imagenes> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<Imagenes> imagenes) {
        this.imagenes = imagenes;
    }
}
