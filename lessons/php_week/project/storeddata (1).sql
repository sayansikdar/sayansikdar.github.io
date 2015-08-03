-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 03, 2015 at 12:26 PM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `storeddata`
--

-- --------------------------------------------------------

--
-- Table structure for table `interest`
--

CREATE TABLE IF NOT EXISTS `interest` (
  `iid` int(5) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interest`
--

INSERT INTO `interest` (`iid`, `name`) VALUES
(1, 'games'),
(2, 'movies'),
(3, 'reading'),
(2, 'movies'),
(3, 'reading');

-- --------------------------------------------------------

--
-- Table structure for table `maps`
--

CREATE TABLE IF NOT EXISTS `maps` (
  `iid` int(5) NOT NULL,
  `id` int(5) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `maps`
--

INSERT INTO `maps` (`iid`, `id`) VALUES
(3, 1),
(3, 2),
(3, 3),
(3, 4);

-- --------------------------------------------------------

--
-- Table structure for table `subscriptiondata`
--

CREATE TABLE IF NOT EXISTS `subscriptiondata` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Mobile` varchar(10) NOT NULL,
  `Sex` varchar(20) NOT NULL,
  `Interest` varchar(20) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `State` varchar(30) NOT NULL,
  `Address` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Dumping data for table `subscriptiondata`
--

INSERT INTO `subscriptiondata` (`id`, `Name`, `Email`, `Mobile`, `Sex`, `Interest`, `Country`, `State`, `Address`) VALUES
(22, 'sayan', 'sikdar@gmail.com', '8017883309', 'female', 'reading', 'usa', 'ArunachalPradeshjhfdkjsdfhkfs', 'address'),
(24, 'sayan', 'asaksj@gmail.com', '8737298372', 'female', 'movies', 'usa', 'AndraPradesh', 'address'),
(26, 'sayan', 'sayan@fusioncharts.com', '3287297927', 'female', 'movies', 'india', 'AndraPradesh', 'asjh adkhdak dakhsdak a'),
(27, 'sayan', 'sayan@fusioncharts.com', '3287297927', 'female', 'movies', 'india', 'AndraPradesh', 'address'),
(28, 'sayan', 'sayansikdar@yahoo.com', '8908234098', 'female', 'reading', 'india', 'AndraPradesh', 'nasda '),
(29, 'sayan', 'sayansikdar@yahoo.com', '8908234098', 'female', 'reading', 'india', 'AndraPradesh', 'nasda '),
(30, 'sayan', 'sayansikdar@yahoo.com', '8739273927', 'female', 'reading', 'india', 'AndraPradesh', 'address'),
(31, 'hxzjkhzxk SA', 'SADHASDA@hksdjhsad.com', '8347879827', 'female', 'reading', 'usa', 'LosAngeles', 'jhsa hsahka a'),
(32, 'hxzjkhzxk SA', 'SADHASDA@hksdjhsad.com', '8347879827', 'female', 'reading', 'usa', 'LosAngeles', 'jhsa hsahka a'),
(33, 'ayan', 'sikdar@gmail.com', '8737298372', 'female', 'reading', 'india', 'ArunachalPradesh', 'hjsda hasdhkadsj kasd');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
