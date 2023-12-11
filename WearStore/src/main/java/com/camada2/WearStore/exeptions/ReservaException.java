package com.camada2.WearStore.exeptions;

public class ReservaException extends RuntimeException{

    private static final long serilVersionUID=1L;

    public ReservaException(String message) {
        super("La reserva no puede ser anterior al dia de hoy");
    }
}
