-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 10:59 AM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `subscriptiondata`
--

INSERT INTO `subscriptiondata` (`id`, `Name`, `Email`, `Mobile`, `Sex`, `Interest`, `Country`, `State`, `Address`) VALUES
(2, 'sa', 'sikdar@gmail.com', '2372486248', 'male', ',movies,reading', 'india', '', 'jasljal asjla a'),
(7, 'sjhkajhkjshkashak', 'sayan@yahoo.com', '6376378934', 'male', ',movies', 'usa', '', 'hdskh shdks'),
(8, 'sayan', 'sayansikdar@yahoo.com', '9328042980', 'male', ',movies', 'usa', '', 'sajlasjla'),
(9, 'hasjha', 'sdhksa@hdskhdsk.com', '3872978987', 'male', ',movies', 'india', '', 'djskdjs'),
(10, 'sahah', 'hkhak@hhskhk.com', '8798272982', 'male', ',movies', 'india', '', 'kjljklsdds'),
(11, 'sahah', 'hkhak@hhskhk.com', '8798272982', 'male', ',movies', 'india', '', 'kjljklsdds'),
(12, 'sayan', 'sayansikdar@yahoo.com', '8397497287', 'male', ',movies', 'india', '', 'ewljslsjlds'),
(13, 'sayan', 'sayansikdar@yahoo.com', '8437937934', 'male', ',movies', 'india', '', 'hksdhksdjhskd');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
