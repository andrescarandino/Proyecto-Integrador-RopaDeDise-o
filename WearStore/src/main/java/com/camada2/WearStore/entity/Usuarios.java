package com.camada2.WearStore.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Usuarios")
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuarios")
    private int idUsuarios;

    @Column(name = "user")
    private String user;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "fechaCreacion")
    private String fechaCreacion;

    @Column(name = "estado")
    private int estado;

    @ManyToOne
    @JoinColumn(name = "TipoUsuarios_idTipoUsuarios")
    private TipoUsuarios tipoUsuarios;

    @OneToMany(mappedBy = "usuario")
    private List<Reservas> reservas;





    // Constructores, getters y setters

    public Usuarios() {
        // Constructor por defecto
    }

    public int getIdUsuarios() {
        return idUsuarios;
    }

    public void setIdUsuarios(int idUsuarios) {
        this.idUsuarios = idUsuarios;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public TipoUsuarios getTipoUsuarios() {
        return tipoUsuarios;
    }

    public void setTipoUsuarios(TipoUsuarios tipoUsuarios) {
        this.tipoUsuarios = tipoUsuarios;
    }
}

