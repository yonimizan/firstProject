-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 19, 2023 at 03:41 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `full-stack 2`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `address` varchar(60) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `firstName`, `lastName`, `email`, `phone`, `address`, `isDeleted`) VALUES
(1, 'sssss', 'sssss', 'sss', 'sssss', 'sssss', 1),
(2, 'yoni', 'mizan', 'yoni@yoni', '0252525', 'golda', 1),
(3, 'vvvvv', 'vvvv', 'vvv', 'vvv', 'vvv', 1),
(5, 'דדד', 'דדד', 'דדד', 'דדד', 'דד', 1),
(6, 'תום', 'מיזן', 'tom@tom', '02525', 'גולדה', 0),
(7, 'יוני', 'מיזן', 'יייי@יייי', '02525252545', 'בלה בלה', 1),
(8, '', '', '', '', '', 1),
(9, '', '', '', '', '', 1),
(10, '', '', '', '', '', 1),
(11, 'sss', 'sssss', 'sss', 'sss', 'ssss', 1),
(12, 'רחלי', 'מיזן', 'jjjjjjj', '05252525vvv', '2554545', 0);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) NOT NULL DEFAULT '0',
  `lastName` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstName`, `lastName`, `email`, `phone`, `isDeleted`) VALUES
(3, 'יוני', 'מיזן', 'yoni@gmail.com', '0525252525', 1),
(2, 'ttttt', 'ttttt', 'ttttt', 'tttttt', 1),
(10, '', '', '', '', 1),
(7, 'רחלי ', 'מיזן', 'yoni@gmail.com', '025252525', 1),
(21, '', '', '', '', 1),
(23, 'gggggg', 'gggggg', 'ggggggg@hhhhh', '025252525', 1),
(24, '', '', '', '', 1),
(25, '', '', '', '', 1),
(26, '', '', '', '', 1),
(30, 'sssss', 'ssss', 'ssss', 'ssss', 1),
(29, 'fffff1111111111111111', 'ffff', 'fffff', 'fffff', 1),
(31, 'ccc', 'ccc', 'ccc', 'ccc', 1),
(32, 'xxxx', 'xxxx', 'xxxx', 'xxxx', 0),
(33, 'zzz', 'zzzz', 'zzzz', 'zzzzzz', 0),
(34, '', '', '', '', 1),
(35, '', '', '', '', 1),
(36, 'SSSS', 'SSS', 'SSSS', 'SSSSSSSS', 0),
(37, 'רחלי מיזן', 'מיזן', 'racheli@mizan.com', '05274947299', 0);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `imageName` varchar(50) DEFAULT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `category`, `imageName`, `isDeleted`) VALUES
(1, 'עגבנייה', 20, 0, NULL, NULL, 0),
(2, 'מלפפון', 10, 0, NULL, NULL, 0),
(3, 'עגבניה', 10, 0, NULL, NULL, 0),
(4, 'עבניה', 10, 0, NULL, NULL, 0),
(5, 'בננה', 10, 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userId` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `remark` int(200) DEFAULT '0',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `createTime`, `userId`, `task`, `status`, `level`, `remark`, `isDeleted`) VALUES
(1, '2023-01-22 18:58:32.211035', 11, 'fdff', 2, 1, 0, 0),
(2, '2023-01-22 19:29:23.676203', 11, 'משימה 2', 0, 1, 0, 0),
(3, '2023-01-22 20:05:54.018955', 11, 'משימה 3vvvv', 1, 1, 0, 0),
(4, '2023-01-22 21:12:52.575553', 11, 'לה לה לה', 0, 1, 0, 1),
(5, '2023-01-29 17:49:57.857948', 11, 'בלה בלה בלה', 1, 0, 0, 0),
(6, '2023-01-29 18:44:55.576053', 11, 'vvv', 0, 0, 0, 1),
(7, '2023-01-29 19:28:26.056134', 11, 'CCC', 0, 0, 0, 0),
(8, '2023-02-08 19:50:45.901753', 11, 'hubh', 0, 0, 0, 1),
(9, '2023-02-18 20:02:02.902842', 12, 'vcvvv', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime NOT NULL,
  `fullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `createdTime`, `fullName`, `email`, `userName`, `password`) VALUES
(1, '2023-01-15 17:47:05', 'yoni', 'yoni@123', 'yonimon1', '3f230640b78d7e71ac5514e57935eb69'),
(11, '2023-01-18 19:53:37', 'yoni', 'yonimizan@gmail.com', 'yonimon', 'b9e42056cdb220121560f81a989a6b7c'),
(12, '2023-02-16 21:04:18', 'רחלי', 'racheli@gmail.com', 'רחלי', '3bad6af0fa4b8b330d162e19938ee981'),
(13, '2023-02-16 21:11:08', 'רחלי מיזן', 'mizan@gmail', 'רחלי מיזן', '02c425157ecd32f259548b33402ff6d3'),
(10, '2023-01-18 19:48:19', 'yoni', 'aaa@aaa', 'qqq', 'b59c67bf196a4758191e42f76670ceba'),
(8, '2023-01-18 19:34:31', 'יוני', 'abc@abc', 'yonimizan', '437599f1ea3514f8969f161a6606ce18'),
(9, '2023-01-18 19:35:19', 'yoni', 'aaa@aaa', 'qqqq', '3bad6af0fa4b8b330d162e19938ee981'),
(14, '2023-02-18 21:12:21', 'TOMI', 'tomizan@gmail.com', 'tomi', '343b1c4a3ea721b2d640fc8700db0f36'),
(15, '2023-02-18 21:15:11', 'TOMI', 'tomizan@gmail.com', 'TOMIZAN', '02c425157ecd32f259548b33402ff6d3'),
(16, '2023-02-24 12:00:15', 'דילן', 'dy@ggg.com', 'דילן', 'fd1592b801e33533f95dfd74d3d114ec'),
(17, '2023-02-25 14:11:51', 'יוני מיזן', 'yoyoyo@gmail.com', 'בלה בלה', '5018646ba7e49f8d231fa8585927bd21');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
