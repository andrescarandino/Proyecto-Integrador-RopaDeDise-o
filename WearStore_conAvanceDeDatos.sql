-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: wear_store
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `idCategorias` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'calzado'),(2,'ropa'),(3,'deportes'),(4,'accesorios');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colores` (
  `idColores` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idColores`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,'blanco'),(2,'negro'),(3,'gris'),(4,'amarillo'),(5,'azul'),(6,'rojo'),(7,'beige'),(8,'café');
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `idGeneros` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idGeneros`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'niños'),(2,'niñas'),(3,'hombre'),(4,'mujer');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `IdImagenes` int NOT NULL AUTO_INCREMENT,
  `ruta` varchar(255) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdImagenes`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'IMG-20231003-WA0273.jpg','foto1','test de imagen');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProductos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `fechaCreacion` varchar(45) DEFAULT NULL,
  `TipoProductos_idTipoProductos` int NOT NULL,
  `Generos_idGeneros` int NOT NULL,
  `Colores_idColores` int NOT NULL,
  `Tallas_idTallas` int NOT NULL,
  `Categorias_idCategorias` int NOT NULL,
  PRIMARY KEY (`idProductos`),
  UNIQUE KEY `Nombre_UNIQUE` (`nombre`),
  KEY `fk_Productos_TipoProductos1_idx` (`TipoProductos_idTipoProductos`),
  KEY `fk_Productos_Generos1_idx` (`Generos_idGeneros`),
  KEY `fk_Productos_Colores1_idx` (`Colores_idColores`),
  KEY `fk_Productos_Tallas1_idx` (`Tallas_idTallas`),
  KEY `fk_Productos_Categorias1_idx` (`Categorias_idCategorias`),
  CONSTRAINT `fk_Productos_Categorias1` FOREIGN KEY (`Categorias_idCategorias`) REFERENCES `categorias` (`idCategorias`),
  CONSTRAINT `fk_Productos_Colores1` FOREIGN KEY (`Colores_idColores`) REFERENCES `colores` (`idColores`),
  CONSTRAINT `fk_Productos_Generos1` FOREIGN KEY (`Generos_idGeneros`) REFERENCES `generos` (`idGeneros`),
  CONSTRAINT `fk_Productos_Tallas1` FOREIGN KEY (`Tallas_idTallas`) REFERENCES `tallas` (`idTallas`),
  CONSTRAINT `fk_Productos_TipoProductos1` FOREIGN KEY (`TipoProductos_idTipoProductos`) REFERENCES `tipoproductos` (`idTipoProductos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'jean primavera','pantalon jean hombre',50.00,'10','2023-10-24 20:57:41',8,3,5,17,2);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productoshasimagenes`
--

DROP TABLE IF EXISTS `productoshasimagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productoshasimagenes` (
  `Imagenes_IdImagenes` int NOT NULL,
  `Productos_idProductos` int NOT NULL,
  KEY `fk_ProductosHasImagenes_Imagenes1_idx` (`Imagenes_IdImagenes`),
  KEY `fk_ProductosHasImagenes_Productos1_idx` (`Productos_idProductos`),
  CONSTRAINT `fk_ProductosHasImagenes_Imagenes1` FOREIGN KEY (`Imagenes_IdImagenes`) REFERENCES `imagenes` (`IdImagenes`),
  CONSTRAINT `fk_ProductosHasImagenes_Productos1` FOREIGN KEY (`Productos_idProductos`) REFERENCES `productos` (`idProductos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productoshasimagenes`
--

LOCK TABLES `productoshasimagenes` WRITE;
/*!40000 ALTER TABLE `productoshasimagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `productoshasimagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productoshasreservas`
--

DROP TABLE IF EXISTS `productoshasreservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productoshasreservas` (
  `Productos_idProductos` int NOT NULL,
  `Reservas_idReservas` int NOT NULL,
  `Usuarios_idUsuarios` int NOT NULL,
  KEY `fk_ProductosHasReservas_Productos1_idx` (`Productos_idProductos`),
  KEY `fk_ProductosHasReservas_Reservas1_idx` (`Reservas_idReservas`),
  KEY `fk_ProductosHasReservas_Usuarios1_idx` (`Usuarios_idUsuarios`),
  CONSTRAINT `fk_ProductosHasReservas_Productos1` FOREIGN KEY (`Productos_idProductos`) REFERENCES `productos` (`idProductos`),
  CONSTRAINT `fk_ProductosHasReservas_Reservas1` FOREIGN KEY (`Reservas_idReservas`) REFERENCES `reservas` (`idReservas`),
  CONSTRAINT `fk_ProductosHasReservas_Usuarios1` FOREIGN KEY (`Usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productoshasreservas`
--

LOCK TABLES `productoshasreservas` WRITE;
/*!40000 ALTER TABLE `productoshasreservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `productoshasreservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `idReservas` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `Usuarios_idUsuarios` int NOT NULL,
  PRIMARY KEY (`idReservas`),
  KEY `fk_Reservas_Usuarios1_idx` (`Usuarios_idUsuarios`),
  CONSTRAINT `fk_Reservas_Usuarios1` FOREIGN KEY (`Usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tallas`
--

DROP TABLE IF EXISTS `tallas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tallas` (
  `idTallas` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idTallas`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tallas`
--

LOCK TABLES `tallas` WRITE;
/*!40000 ALTER TABLE `tallas` DISABLE KEYS */;
INSERT INTO `tallas` VALUES (1,'xs'),(2,'s'),(3,'m'),(4,'l'),(5,'xl'),(6,'xxl'),(7,'xxxl'),(8,'2'),(9,'4'),(10,'6'),(11,'8'),(12,'10'),(13,'12'),(14,'14'),(15,'16'),(16,'28'),(17,'30'),(18,'32'),(19,'34'),(20,'36'),(21,'38'),(22,'40'),(23,'42'),(24,'44');
/*!40000 ALTER TABLE `tallas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoproductos`
--

DROP TABLE IF EXISTS `tipoproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoproductos` (
  `idTipoProductos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `Categorias_idCategorias` int NOT NULL,
  PRIMARY KEY (`idTipoProductos`),
  KEY `fk_TipoProductos_Categorias1_idx` (`Categorias_idCategorias`),
  CONSTRAINT `fk_TipoProductos_Categorias1` FOREIGN KEY (`Categorias_idCategorias`) REFERENCES `categorias` (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoproductos`
--

LOCK TABLES `tipoproductos` WRITE;
/*!40000 ALTER TABLE `tipoproductos` DISABLE KEYS */;
INSERT INTO `tipoproductos` VALUES (1,'running',1),(2,'guayos',1),(3,'sandalias',1),(4,'urbano',1),(5,'camiseta',3),(6,'pantaloneta',3),(7,'chaqueta',2),(8,'jean',2),(9,'falda',2);
/*!40000 ALTER TABLE `tipoproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuarios`
--

DROP TABLE IF EXISTS `tipousuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipousuarios` (
  `idTipoUsuarios` int NOT NULL AUTO_INCREMENT,
  `nombre` int NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idTipoUsuarios`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuarios`
--

LOCK TABLES `tipousuarios` WRITE;
/*!40000 ALTER TABLE `tipousuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipousuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuarios` int NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fechaCreacion` varchar(45) DEFAULT NULL,
  `estado` int NOT NULL,
  `TipoUsuarios_idTipoUsuarios` int NOT NULL,
  PRIMARY KEY (`idUsuarios`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `idusuarios_UNIQUE` (`idUsuarios`),
  UNIQUE KEY `user_UNIQUE` (`user`),
  KEY `fk_Usuarios_TipoUsuarios1_idx` (`TipoUsuarios_idTipoUsuarios`),
  CONSTRAINT `fk_Usuarios_TipoUsuarios1` FOREIGN KEY (`TipoUsuarios_idTipoUsuarios`) REFERENCES `tipousuarios` (`idTipoUsuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-24 21:58:59
