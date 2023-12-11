package com.camada2.WearStore.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


    @Entity
    @Table(name = "favoritos")
    public class Favorito {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        @ManyToOne
        @JoinColumn(name = "idUsuarios")
        @JsonIgnore
        private Usuarios usuariosId;

        @ManyToOne
        @JoinColumn(name = "idProductos")
        @JsonIgnore
        private Productos productosId;



        public void setUsuario(Usuarios usuario) {
            this.usuariosId = usuario;
        }

        public void setProducto(Productos producto) {
            this.productosId = producto;
        }



        public Usuarios getUsuario() {
            return usuariosId;
        }

        public Productos getProducto() {
            return productosId;
        }
    }



