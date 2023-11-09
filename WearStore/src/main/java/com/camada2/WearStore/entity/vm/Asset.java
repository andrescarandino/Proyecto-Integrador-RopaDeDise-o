package com.camada2.WearStore.entity.vm;



import java.util.Arrays;
import java.util.Objects;


public class Asset {

    private byte[] content;
    private String contentType;

    public Asset() {
    }

    public Asset(byte[] content, String contentType) {
        this.content = content;
        this.contentType = contentType;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    @Override
    public String toString() {
        return "Asset{" +
                "content=" + Arrays.toString(content) +
                ", contentType='" + contentType + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Asset asset = (Asset) o;
        return Arrays.equals(content, asset.content) && Objects.equals(contentType, asset.contentType);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(contentType);
        result = 31 * result + Arrays.hashCode(content);
        return result;
    }
}
