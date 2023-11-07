package com.camada2.WearStore.exeptions;

public class UsuarioInexistenteExeption extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public UsuarioInexistenteExeption(){
        super("El usuario no existe");
    }
}
