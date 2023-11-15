package com.camada2.WearStore.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.Set;

@Entity
@Table(name = "Usuarios")
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuarios")
    private int idUsuarios;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Email
    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "fechaCreacion")
    private String fechaCreacion;

    @Column(name = "estado")
    private int estado;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = TipoUsuarios.class, cascade = CascadeType.PERSIST)
    @JoinTable(name = "usuarios_tipoUsuarios", joinColumns = @JoinColumn(name = "idUsuarios"), inverseJoinColumns = @JoinColumn(name = "idTipoUsuarios"))
    private Set<TipoUsuarios> roles;

    // Constructores, getters y setters

    public Usuarios() {
        // Constructor por defecto
    }

    public Usuarios(int idUsuarios, String nombre, String apellido, String email, String password, String fechaCreacion, int estado) {
        this.idUsuarios = idUsuarios;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.fechaCreacion = fechaCreacion;
        this.estado = estado;
    }

    public int getIdUsuarios() {
        return idUsuarios;
    }

    public void setIdUsuarios(int idUsuarios) {
        this.idUsuarios = idUsuarios;
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

}

