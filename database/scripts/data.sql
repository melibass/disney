-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: disney
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'Minnie','imgminnie.jpg',22,350,'Little mouse in love with  Mickey',NULL,NULL),(2,'Mickey','img.jpg',22,500,'Little mouse in love with Minnie',NULL,NULL),(11,'Mike Wasowski','mike.jpg',28,23,'Employee of Monsters Incorporated',NULL,NULL),(12,'Coco','coco.jpg',10,20,'Kid that wants to be a guitarrist',NULL,NULL),(13,'Andy','any.jpg',10,20,'Kid that owns Woody',NULL,NULL);
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `characters_movies`
--

LOCK TABLES `characters_movies` WRITE;
/*!40000 ALTER TABLE `characters_movies` DISABLE KEYS */;
INSERT INTO `characters_movies` VALUES (1,'1','1',NULL,NULL),(2,'2','2',NULL,NULL),(3,'3','3',NULL,NULL),(4,'4','4',NULL,NULL),(5,'5','5',NULL,NULL),(6,'6','6',NULL,NULL),(7,'7','7',NULL,NULL),(8,'8','8',NULL,NULL),(9,'9','9',NULL,NULL),(10,'10','10',NULL,NULL),(11,'11','11',NULL,NULL),(12,'12','12',NULL,NULL),(13,'13','13',NULL,NULL);
/*!40000 ALTER TABLE `characters_movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'comedy',NULL,NULL,NULL);
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'imgmovie.jpg','Fantasy','0000-00-00 00:00:00',5,NULL,NULL,NULL),(11,'minc.jpg','Monsters Inc','0000-00-00 00:00:00',4,1,NULL,NULL),(12,'coco.jpg','Coco','0000-00-00 00:00:00',4,NULL,NULL,NULL),(13,'ts.jpg','Toy Story','0000-00-00 00:00:00',5,NULL,NULL,NULL);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220316135636-create-user.js'),('20220316140145-create-movie.js'),('20220316140446-create-genre.js'),('20220316140600-create-character.js'),('20220316140823-create-character-movie.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Maria','maria@maria.com','$2b$10$7AZi0BiNOZOkbwA7Bfj9hO2Lj3bY/BrapejpBggNSQOMgEmkNh7LK',NULL,NULL),(2,'Pedro','pedro@pedro.com','$2b$10$r5sSELBBNGlRsXNbhfUmhuOPafaA71vwL7o2wFVRuX6mtE8B66f1e',NULL,NULL),(32,'Martin','martin@martin.com','$2b$10$JCWqU0WKzkmv6LzNdUYTfeApIM2.nMnGhky8MPREchfIRWiOaAmVS',NULL,NULL),(33,'Melina','m@m.com','$2b$10$SQ5LiFaCIEUW2mHTdDPDCefjcoAJiF2FeWQUwvWfcyWj3j0jcmGYS',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-24  0:23:16
