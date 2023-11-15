package com.camada2.WearStore.service.impl;


import com.camada2.WearStore.exeptions.EmailException;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.model.Message;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.ByteArrayOutputStream;
import java.util.Properties;

@Service
public class MailServices {
    @Autowired
    private final Gmail gmail;

    @Autowired
    public MailServices(Gmail gmail) {
        this.gmail=gmail;
    }


    public void sendEmail (String toAddress,String subject,String content)throws EmailException{




        Properties props =new Properties();

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return super.getPasswordAuthentication();
            }
        });

        MimeMessage email= new MimeMessage(session);

        try {

            email.setFrom(new InternetAddress("giansicca70@gmail.com"));
            email.addRecipient(javax.mail.Message.RecipientType.TO, new InternetAddress(toAddress));

            email.setSubject(subject);
            email.setText(content);

            ByteArrayOutputStream buffer= new ByteArrayOutputStream();
            email.writeTo(buffer);

            byte[] rawMessageBytes= buffer.toByteArray();

            String encodeEmail= Base64.encodeBase64URLSafeString(rawMessageBytes);
            Message message= new Message();

            message.setRaw(encodeEmail);

            message=gmail.users().messages().send("me", message).execute();

        }catch(Exception e) {
            e.printStackTrace();
            throw new EmailException();
        }
    }


}
