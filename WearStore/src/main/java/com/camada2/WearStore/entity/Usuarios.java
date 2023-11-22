package com.camada2.WearStore.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "Usuarios")
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuarios")
    private int idUsuarios;

    @Column(name = "user")
    private String user;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Email
    @NotBlank
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    @NotBlank
    private String password;

    @Column(name = "fechaCreacion")
    private String fechaCreacion;

    @Column(name = "estado")
    private int estado;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = TipoUsuarios.class, cascade = CascadeType.ALL)
    @JoinTable(name = "usuarios_tipoUsuarios", joinColumns = @JoinColumn(name = "idUsuarios"), inverseJoinColumns = @JoinColumn(name = "idTipoUsuarios"))
    private Set<TipoUsuarios> roles;


    @OneToMany(mappedBy = "usuariosId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Favorito> favoritos = new ArrayList<>();

    public void setFavoritos(List<Favorito> favoritos) {
        this.favoritos = favoritos;
    }

    public Usuarios() {
        // Constructor por defecto
    }

    public Usuarios(String user, String nombre, String apellido, String email, String password, String fechaCreacion, int estado) {
        this.user = user;
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

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Set<TipoUsuarios> getRoles() {
        return roles;
    }

    public void setRoles(Set<TipoUsuarios> roles) {
        this.roles = roles;
    }



}

