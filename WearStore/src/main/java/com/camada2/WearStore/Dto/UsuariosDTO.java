package com.camada2.WearStore.Dto;

import com.camada2.WearStore.entity.Reservas;
import com.camada2.WearStore.entity.TipoUsuarios;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class UsuariosDTO {


    private String user;

    private String nombre;


    private String apellido;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;


    private String fechaCreacion;


    private int estado;


    private Set<String> roles;

    private List<Reservas> reservas;

    // Constructores, getters y setters

    public UsuariosDTO() {
        // Constructor por defecto
    }

    public UsuariosDTO(String user, String nombre, String apellido, String email, String password, String fechaCreacion, int estado, List<Reservas> reservas) {
        this.user = user;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.fechaCreacion = fechaCreacion;
        this.estado = estado;
        this.reservas=reservas;
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

}
