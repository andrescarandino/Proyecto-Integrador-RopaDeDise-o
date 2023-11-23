package com.camada2.WearStore.Dto;

import com.camada2.WearStore.entity.Reservas;

public class ReservaDto {

    private Reservas reservas;
    private String nombre;
    private Integer idUsuario;


    public ReservaDto(Reservas reservas, String nombre, Integer idUsuario) {
        this.reservas = reservas;
        this.nombre = nombre;
        this.idUsuario = idUsuario;
    }

    public ReservaDto() {
    }

    public Reservas getReservas() {
        return reservas;
    }

    public void setReservas(Reservas reservas) {
        this.reservas = reservas;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }
}
