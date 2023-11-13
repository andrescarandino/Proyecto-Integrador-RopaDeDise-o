package com.camada2.WearStore.service;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

public interface IS3ServiceImg <E, T> {

    public E uploadFile(T t)throws IOException;

    public E downloadFile(E e) throws IOException;

    public E getFile(E e);

    public List<E> listFiles() throws IOException;

    public E updatefile(T t, E e) throws IOException;

    public E renameFile(E e, E i) throws IOException;

    public E deleteFile(E e) throws IOException;


}
