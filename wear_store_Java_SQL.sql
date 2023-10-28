-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema wear_store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema wear_store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wear_store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `wear_store` ;

-- -----------------------------------------------------
-- Table `wear_store`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`categorias` (
  `id_categorias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_categorias`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`colores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`colores` (
  `id_colores` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_colores`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`generos` (
  `id_generos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_generos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`imagenes` (
  `id_imagenes` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `ruta` VARCHAR(255) NULL DEFAULT NULL,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_imagenes`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`tallas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`tallas` (
  `id_tallas` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_tallas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`tipo_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`tipo_productos` (
  `id_tipo_productos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_tipo_productos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`productos` (
  `cantidad` INT NULL DEFAULT NULL,
  `id_categorias` INT NULL DEFAULT NULL,
  `id_colores` INT NULL DEFAULT NULL,
  `id_generos` INT NULL DEFAULT NULL,
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `id_tallas` INT NULL DEFAULT NULL,
  `id_tipo_productos` INT NULL DEFAULT NULL,
  `precio` DOUBLE NULL DEFAULT NULL,
  `fecha_creacion` DATETIME(6) NULL DEFAULT NULL,
  `fecha_eliminacion` DATETIME(6) NULL DEFAULT NULL,
  `fecha_modificacion` DATETIME(6) NULL DEFAULT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_productos`),
  INDEX `FK84x6y8l79mwyaolbsciakeph` (`id_categorias` ASC) VISIBLE,
  INDEX `FKhms5q2km90trypagitt3i6srw` (`id_colores` ASC) VISIBLE,
  INDEX `FKm27nstb3rowfr6eb1qlh8b6vk` (`id_generos` ASC) VISIBLE,
  INDEX `FKh68mbv30i5h96dqu4afnffn80` (`id_tallas` ASC) VISIBLE,
  INDEX `FKnuulpdna739b2nhvduw93c577` (`id_tipo_productos` ASC) VISIBLE,
  CONSTRAINT `FK84x6y8l79mwyaolbsciakeph`
    FOREIGN KEY (`id_categorias`)
    REFERENCES `wear_store`.`categorias` (`id_categorias`),
  CONSTRAINT `FKh68mbv30i5h96dqu4afnffn80`
    FOREIGN KEY (`id_tallas`)
    REFERENCES `wear_store`.`tallas` (`id_tallas`),
  CONSTRAINT `FKhms5q2km90trypagitt3i6srw`
    FOREIGN KEY (`id_colores`)
    REFERENCES `wear_store`.`colores` (`id_colores`),
  CONSTRAINT `FKm27nstb3rowfr6eb1qlh8b6vk`
    FOREIGN KEY (`id_generos`)
    REFERENCES `wear_store`.`generos` (`id_generos`),
  CONSTRAINT `FKnuulpdna739b2nhvduw93c577`
    FOREIGN KEY (`id_tipo_productos`)
    REFERENCES `wear_store`.`tipo_productos` (`id_tipo_productos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`producto_has_imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`producto_has_imagenes` (
  `id_imagenes` INT NOT NULL,
  `id_productos` INT NOT NULL,
  INDEX `FKb10uqarilgt08p34gqoc8i9t6` (`id_imagenes` ASC) VISIBLE,
  INDEX `FKbhoag1hklrtunbbh3nj3tarc6` (`id_productos` ASC) VISIBLE,
  CONSTRAINT `FKb10uqarilgt08p34gqoc8i9t6`
    FOREIGN KEY (`id_imagenes`)
    REFERENCES `wear_store`.`imagenes` (`id_imagenes`),
  CONSTRAINT `FKbhoag1hklrtunbbh3nj3tarc6`
    FOREIGN KEY (`id_productos`)
    REFERENCES `wear_store`.`productos` (`id_productos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`tipo_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`tipo_usuarios` (
  `id_tipo_usuarios` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_tipo_usuarios`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`usuarios` (
  `estado` INT NULL DEFAULT NULL,
  `id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `tipo_usuarios_id_tipo_usuarios` INT NULL DEFAULT NULL,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `fecha_creacion` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `user` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`),
  INDEX `FKk4pmaxqyfdq06hy91cvami01a` (`tipo_usuarios_id_tipo_usuarios` ASC) VISIBLE,
  CONSTRAINT `FKk4pmaxqyfdq06hy91cvami01a`
    FOREIGN KEY (`tipo_usuarios_id_tipo_usuarios`)
    REFERENCES `wear_store`.`tipo_usuarios` (`id_tipo_usuarios`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`reservas` (
  `id_reservas` INT NOT NULL AUTO_INCREMENT,
  `usuarios_id_usuarios` INT NULL DEFAULT NULL,
  `fecha` DATETIME(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id_reservas`),
  INDEX `FK2clngh2cu409qi7yvosk54qeo` (`usuarios_id_usuarios` ASC) VISIBLE,
  CONSTRAINT `FK2clngh2cu409qi7yvosk54qeo`
    FOREIGN KEY (`usuarios_id_usuarios`)
    REFERENCES `wear_store`.`usuarios` (`id_usuarios`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wear_store`.`producto_has_reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wear_store`.`producto_has_reservas` (
  `id_productos` INT NOT NULL,
  `id_reservas` INT NOT NULL,
  INDEX `FKmieiqgfgv8dicxjjeo1sf43pp` (`id_reservas` ASC) VISIBLE,
  INDEX `FK74m3fc8pklfp1urao0pp851ou` (`id_productos` ASC) VISIBLE,
  CONSTRAINT `FK74m3fc8pklfp1urao0pp851ou`
    FOREIGN KEY (`id_productos`)
    REFERENCES `wear_store`.`productos` (`id_productos`),
  CONSTRAINT `FKmieiqgfgv8dicxjjeo1sf43pp`
    FOREIGN KEY (`id_reservas`)
    REFERENCES `wear_store`.`reservas` (`id_reservas`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
