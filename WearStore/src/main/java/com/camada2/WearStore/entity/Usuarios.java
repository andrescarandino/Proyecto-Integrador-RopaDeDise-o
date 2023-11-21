package com.camada2.WearStore.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Usuarios")
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Usuarios")
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
    private TipoUsuarios tipo_usuarios_id_tipo_usuarios;





    @OneToMany(mappedBy = "usuariosId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Favorito> favoritos = new ArrayList<>();

    public void setFavoritos(List<Favorito> favoritos) {
        this.favoritos = favoritos;
    }

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
        return tipo_usuarios_id_tipo_usuarios;
    }

    public void setTipoUsuarios(TipoUsuarios tipoUsuarios) {
        this.tipo_usuarios_id_tipo_usuarios = tipoUsuarios;
    }

}

