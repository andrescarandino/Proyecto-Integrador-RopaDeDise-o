package com.camada2.WearStore.exeptions;

public class EmailException  extends RuntimeException{
    private static final long serilVersionUID=1L;


    public EmailException() {

        super("El correo electronico ya esta en uso");
    }
}
