package com.camada2.WearStore.config;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;

import com.google.api.services.gmail.GmailScopes;
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.services.gmail.Gmail;


@Configuration
public class MailConfig {
    // Nombre de la aplicación
    private static final String APPLICATION_NAME = "wear_store";

    // Factoria para el formato JSON
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();

    // Ruta donde se almacenan los tokens de autenticación
    private static final String TOKENS_DIRECTORY_PATH = "tokens";

    // Alcance de acceso de la aplicación a la cuenta de Gmail del usuario (en este caso, solo envío de correos)
    private static final List<String> SCOPES = Collections.singletonList(GmailScopes.GMAIL_SEND);

    // Ruta al archivo de credenciales JSON descargado desde Google Cloud
    private static final String CREDENTIALS_FILE = "/client-secret-wearStore.json";


    private Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {

        InputStream in=MailConfig.class.getResourceAsStream(CREDENTIALS_FILE) ;
        if(in==null) {
            throw new FileNotFoundException("Credenciales no encontradas");
        }

        GoogleClientSecrets clientSecrets =GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));



        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY,clientSecrets,SCOPES)
                .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
                .setAccessType("offline")// Se establece el tipo de acceso como "offline". Esto significa que se obtendrán tokens de actualización
                //que permitirán a la aplicación acceder a la cuenta de Gmail del usuario incluso cuando este no esté presente.
                .build();



        LocalServerReceiver reciever = new LocalServerReceiver.Builder().setPort(8888).build();
        Credential credential = new AuthorizationCodeInstalledApp(flow, reciever).authorize("user");


        return credential;
    }

        @Bean
        public Gmail getService() {
            NetHttpTransport HTTP_TRANSPORT;

            try {
                // Inicializa el transporte HTTP confiable para la aplicación
                HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
                // Crea y configura un cliente de la API de Gmail
                return new Gmail.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
                        .setApplicationName(APPLICATION_NAME)
                        .build();
            }catch(GeneralSecurityException | IOException e) {
                e.printStackTrace();
                return null;
            }
        }
    }

