-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.6.20 - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             8.0.0.4396
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para radio
DROP DATABASE IF EXISTS `radio`;
CREATE DATABASE IF NOT EXISTS `radio` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `radio`;


-- Volcando estructura para tabla radio.commets
DROP TABLE IF EXISTS `commets`;
CREATE TABLE IF NOT EXISTS `commets` (
  `idComm` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `message` text COLLATE utf8_spanish_ci NOT NULL,
  `title` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `date` datetime NOT NULL,
  KEY `Índice 1` (`idComm`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla radio.commets: ~3 rows (aproximadamente)
DELETE FROM `commets`;
/*!40000 ALTER TABLE `commets` DISABLE KEYS */;
INSERT INTO `commets` (`idComm`, `name`, `email`, `message`, `title`, `date`) VALUES
	(2, 'Nombre2', 'Mail2', 'Message2', 'Tilulo2', '2014-11-22 22:08:16'),
	(1, 'Nombre', 'Mail', 'Message', 'Tilulo', '2014-11-22 22:08:16'),
	(3, 'Nombre3', 'Mail3', 'Message3', 'Tilulo3', '2014-11-22 22:08:16');
/*!40000 ALTER TABLE `commets` ENABLE KEYS */;


-- Volcando estructura para tabla radio.log
DROP TABLE IF EXISTS `log`;
CREATE TABLE IF NOT EXISTS `log` (
  `idLog` int(10) NOT NULL AUTO_INCREMENT,
  `level` int(10) DEFAULT NULL,
  `message` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `location` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `userId` int(10) DEFAULT NULL,
  `currentDate` datetime DEFAULT NULL,
  PRIMARY KEY (`idLog`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla radio.log: ~151 rows (aproximadamente)
DELETE FROM `log`;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` (`idLog`, `level`, `message`, `location`, `userId`, `currentDate`) VALUES
	(5, 1, 'SELECT idUser, user FROM users WHERE user = \'\'', 'Select', 0, '2014-11-18 19:09:33'),
	(6, 1, 'SELECT idUser, user FROM users WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:10:01'),
	(7, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:11:05'),
	(8, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:11:08'),
	(9, 1, 'SELECT user FROM user WHERE user = \'1234\'', 'Select', 0, '2014-11-18 19:11:36'),
	(10, 1, 'SELECT user FROM user WHERE user = \'1321223\'', 'Select', 0, '2014-11-18 19:13:06'),
	(11, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:13:10'),
	(12, 1, 'SELECT user FROM user WHERE user = \'123456\'', 'Select', 0, '2014-11-18 19:13:36'),
	(13, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:13:40'),
	(14, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:30:27'),
	(15, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:32:04'),
	(16, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-18 19:32:13'),
	(17, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-19 19:04:33'),
	(18, 1, '', 'algo', 0, '2014-11-19 20:01:10'),
	(19, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:19:35'),
	(20, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:21:13'),
	(21, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:22:08'),
	(22, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:22:40'),
	(23, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:26:34'),
	(24, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:27:24'),
	(25, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:27:51'),
	(26, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:28:38'),
	(27, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:30:06'),
	(28, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:30:25'),
	(29, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:30:43'),
	(30, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:31:34'),
	(31, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:41:43'),
	(32, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:42:41'),
	(33, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:43:00'),
	(34, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:44:04'),
	(35, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:45:11'),
	(36, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:48:42'),
	(37, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:50:29'),
	(38, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:51:26'),
	(39, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:54:25'),
	(40, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:55:11'),
	(41, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:55:47'),
	(42, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:56:37'),
	(43, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-19 20:57:46'),
	(44, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:49:17'),
	(45, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:55:24'),
	(46, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:55:46'),
	(47, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:56:04'),
	(48, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:56:08'),
	(49, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:57:14'),
	(50, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:58:04'),
	(51, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:58:40'),
	(52, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:59:13'),
	(53, 1, 'DELETE FROM news WHERE idNew=', '', 0, '2014-11-20 18:59:13'),
	(54, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 18:59:58'),
	(55, 1, 'DELETE FROM news WHERE idNew=', '', 0, '2014-11-20 18:59:58'),
	(56, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:30'),
	(57, 1, 'DELETE FROM news WHERE idNew=1', '', 0, '2014-11-20 19:00:30'),
	(58, 1, 'DELETE FROM news WHERE idNew=2', '', 0, '2014-11-20 19:00:33'),
	(59, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:33'),
	(60, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:35'),
	(61, 1, 'DELETE FROM news WHERE idNew=3', '', 0, '2014-11-20 19:00:35'),
	(62, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:37'),
	(63, 1, 'DELETE FROM news WHERE idNew=3', '', 0, '2014-11-20 19:00:37'),
	(64, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:39'),
	(65, 1, 'DELETE FROM news WHERE idNew=4', '', 0, '2014-11-20 19:00:39'),
	(66, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:42'),
	(67, 1, 'DELETE FROM news WHERE idNew=4', '', 0, '2014-11-20 19:00:42'),
	(68, 1, 'DELETE FROM news WHERE idNew=5', '', 0, '2014-11-20 19:00:45'),
	(69, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:45'),
	(70, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:47'),
	(71, 1, 'DELETE FROM news WHERE idNew=6', '', 0, '2014-11-20 19:00:47'),
	(72, 1, 'DELETE FROM news WHERE idNew=6', '', 0, '2014-11-20 19:00:49'),
	(73, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:49'),
	(74, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:53'),
	(75, 1, 'DELETE FROM news WHERE idNew=7', '', 0, '2014-11-20 19:00:53'),
	(76, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:55'),
	(77, 1, 'DELETE FROM news WHERE idNew=7', '', 0, '2014-11-20 19:00:55'),
	(78, 1, 'DELETE FROM news WHERE idNew=8', '', 0, '2014-11-20 19:00:57'),
	(79, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:57'),
	(80, 1, 'DELETE FROM news WHERE idNew=8', '', 0, '2014-11-20 19:00:59'),
	(81, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:00:59'),
	(82, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:02'),
	(83, 1, 'DELETE FROM news WHERE idNew=9', '', 0, '2014-11-20 19:01:02'),
	(84, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:04'),
	(85, 1, 'DELETE FROM news WHERE idNew=9', '', 0, '2014-11-20 19:01:04'),
	(86, 1, 'DELETE FROM news WHERE idNew=10', '', 0, '2014-11-20 19:01:06'),
	(87, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:06'),
	(88, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:08'),
	(89, 1, 'DELETE FROM news WHERE idNew=11', '', 0, '2014-11-20 19:01:08'),
	(90, 1, 'DELETE FROM news WHERE idNew=11', '', 0, '2014-11-20 19:01:11'),
	(91, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:11'),
	(92, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:13'),
	(93, 1, 'DELETE FROM news WHERE idNew=12', '', 0, '2014-11-20 19:01:13'),
	(94, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:15'),
	(95, 1, 'DELETE FROM news WHERE idNew=13', '', 0, '2014-11-20 19:01:15'),
	(96, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:17'),
	(97, 1, 'DELETE FROM news WHERE idNew=13', '', 0, '2014-11-20 19:01:17'),
	(98, 1, 'DELETE FROM news WHERE idNew=14', '', 0, '2014-11-20 19:01:20'),
	(99, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:20'),
	(100, 1, 'DELETE FROM news WHERE idNew=14', '', 0, '2014-11-20 19:01:23'),
	(101, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:23'),
	(102, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:26'),
	(103, 1, 'DELETE FROM news WHERE idNew=15', '', 0, '2014-11-20 19:01:26'),
	(104, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:29'),
	(105, 1, 'DELETE FROM news WHERE idNew=15', '', 0, '2014-11-20 19:01:29'),
	(106, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:31'),
	(107, 1, 'DELETE FROM news WHERE idNew=16', '', 0, '2014-11-20 19:01:31'),
	(108, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:34'),
	(109, 1, 'DELETE FROM news WHERE idNew=16', '', 0, '2014-11-20 19:01:34'),
	(110, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:36'),
	(111, 1, 'DELETE FROM news WHERE idNew=17', '', 0, '2014-11-20 19:01:36'),
	(112, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:38'),
	(113, 1, 'DELETE FROM news WHERE idNew=17', '', 0, '2014-11-20 19:01:38'),
	(114, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:40'),
	(115, 1, 'DELETE FROM news WHERE idNew=18', '', 0, '2014-11-20 19:01:40'),
	(116, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:01:45'),
	(117, 1, 'DELETE FROM news WHERE idNew=18', '', 0, '2014-11-20 19:01:45'),
	(118, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-20 19:02:24'),
	(119, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-22 20:46:23'),
	(120, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 20:46:23'),
	(121, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 20:47:36'),
	(122, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 20:48:07'),
	(123, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 20:48:10'),
	(124, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 20:49:36'),
	(125, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 20:56:02'),
	(126, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:06:17'),
	(127, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:06:28'),
	(128, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:09:45'),
	(129, 1, 'SELECT user FROM user WHERE user = \'12345\'', 'Select', 0, '2014-11-22 21:12:11'),
	(130, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:12:11'),
	(131, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:13:27'),
	(132, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:13:38'),
	(133, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:13:46'),
	(134, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:19:58'),
	(135, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:20:18'),
	(136, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:22:57'),
	(137, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:23:40'),
	(138, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:24:27'),
	(139, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:25:39'),
	(140, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:25:50'),
	(141, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:26:39'),
	(142, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:26:46'),
	(143, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:28:29'),
	(144, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:28:50'),
	(145, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:29:13'),
	(146, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:29:13'),
	(147, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:29:20'),
	(148, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:29:23'),
	(149, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:29:27'),
	(150, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:29:27'),
	(151, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:29:34'),
	(152, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:30:52'),
	(153, 1, 'SELECT idNew, title, description, url, date FROM news', 'Select', 0, '2014-11-22 21:31:04'),
	(154, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:31:05'),
	(155, 1, 'SELECT idProgram, title, description, url, time FROM programs', 'Select', 0, '2014-11-22 21:31:14');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;


-- Volcando estructura para tabla radio.news
DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `idNew` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `description` text COLLATE utf8_spanish_ci NOT NULL,
  `url` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `date` datetime NOT NULL,
  KEY `Índice 1` (`idNew`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla radio.news: ~2 rows (aproximadamente)
DELETE FROM `news`;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` (`idNew`, `title`, `description`, `url`, `date`) VALUES
	(19, 'Noticia de prueba', 'Descripúíó', 'Sin título.png', '2014-11-19 20:50:28'),
	(20, 'Titulo', 'asd', 'Sin título.png', '2014-11-19 20:54:22');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;


-- Volcando estructura para tabla radio.programs
DROP TABLE IF EXISTS `programs`;
CREATE TABLE IF NOT EXISTS `programs` (
  `idProgram` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `description` text COLLATE utf8_spanish_ci,
  `url` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `time` text COLLATE utf8_spanish_ci,
  KEY `Índice 1` (`idProgram`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla radio.programs: ~2 rows (aproximadamente)
DELETE FROM `programs`;
/*!40000 ALTER TABLE `programs` DISABLE KEYS */;
INSERT INTO `programs` (`idProgram`, `title`, `description`, `url`, `time`) VALUES
	(2, 'Titulo', 'Déscripción', 'Joker-2529 (1).jpg', 'Horario'),
	(3, 'Acccc', 'aa', '', 'aaa');
/*!40000 ALTER TABLE `programs` ENABLE KEYS */;


-- Volcando estructura para tabla radio.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` int(10) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  KEY `Índice 1` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla radio.user: ~1 rows (aproximadamente)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`idUser`, `user`) VALUES
	(1, '12345');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
