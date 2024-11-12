-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2024 at 05:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `channel_message`
--

CREATE TABLE `channel_message` (
  `id` int(11) NOT NULL,
  `channel_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `channel_type` int(11) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `flag` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `channel_message`
--

INSERT INTO `channel_message` (`id`, `channel_id`, `user_id`, `channel_type`, `message`, `create_at`, `update_at`, `flag`) VALUES
(4, 101, 1, 1, 'test tin nhắn 1', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(5, 101, 2, 1, 'test tin nhắn 2', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(6, 101, 1, 1, 'đây tin nhắn 1, 1 số ngẫu nhiên 0.20015881654604217', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(7, 101, 2, 1, 'đây tin nhắn 1, 1 số ngẫu nhiên 0.2996674556082233', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(8, 101, 1, 1, 'đây tin nhắn 2, 1 số ngẫu nhiên 0.9818945549629119', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(9, 101, 2, 1, 'đây tin nhắn 2, 1 số ngẫu nhiên 0.5134914166374573', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(10, 101, 1, 1, 'đây tin nhắn 3, 1 số ngẫu nhiên 0.40937245678972145', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(11, 101, 2, 1, 'đây tin nhắn 3, 1 số ngẫu nhiên 0.899044520045575', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(12, 101, 1, 1, 'đây tin nhắn 4, 1 số ngẫu nhiên 0.09817464267476583', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(13, 101, 2, 1, 'đây tin nhắn 4, 1 số ngẫu nhiên 0.9218212463787594', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(14, 101, 1, 1, 'đây tin nhắn 5, 1 số ngẫu nhiên 0.3346291368211147', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(15, 101, 2, 1, 'đây tin nhắn 5, 1 số ngẫu nhiên 0.4226563956568865', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(16, 101, 1, 1, 'đây tin nhắn 6, 1 số ngẫu nhiên 0.7430636322242434', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(17, 101, 2, 1, 'đây tin nhắn 6, 1 số ngẫu nhiên 0.8993592505401005', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(18, 101, 1, 1, 'đây tin nhắn 7, 1 số ngẫu nhiên 0.608629794693164', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(19, 101, 2, 1, 'đây tin nhắn 7, 1 số ngẫu nhiên 0.9458856060354048', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(20, 101, 1, 1, 'đây tin nhắn 8, 1 số ngẫu nhiên 0.9590569270918892', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(21, 101, 2, 1, 'đây tin nhắn 8, 1 số ngẫu nhiên 0.01848626281350918', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(22, 101, 1, 1, 'đây tin nhắn 9, 1 số ngẫu nhiên 0.22075650549278825', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(23, 101, 2, 1, 'đây tin nhắn 9, 1 số ngẫu nhiên 0.10426141625798224', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(24, 101, 1, 1, 'đây tin nhắn 10, 1 số ngẫu nhiên 0.6037429239321148', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(25, 101, 2, 1, 'đây tin nhắn 10, 1 số ngẫu nhiên 0.8344110649299215', '2024-11-06 12:50:53', '2024-11-06 12:50:53', 1),
(26, 101, 2, 1, 'xin chào', '2024-11-07 12:59:57', '2024-11-07 12:59:57', 0),
(27, 101, 1, 1, 'đây là tin nhắn thử', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(28, 101, 1, 1, 'abc', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(29, 101, 1, 1, 'Test tin nhắn tý nào', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(30, 101, 1, 1, 'test', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(31, 101, 1, 1, '1234', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(32, 101, 1, 1, 'Abc xyz', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(33, 101, 1, 1, '123 test', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(34, 101, 1, 1, 'Ok test', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(35, 101, 3, 1, '123', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(36, 101, 3, 1, '1234', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(37, 101, 1, 1, '123', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(38, 101, 3, 1, 'abc', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(39, 101, 3, 1, '1234', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(40, 101, 5, 1, '124', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(41, 101, 1, 1, '4321', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(42, 101, 1, 1, 'asd', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(43, 101, 6, 1, 'abc', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(44, 101, 1, 1, '123', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(45, 101, 1, 1, '5678', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(46, 101, 3, 1, 'Test lần nữa', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(47, 101, 3, 1, 'Lên được rồi nè', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(48, 101, 3, 1, 'Chỉ là hơi delay', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(49, 101, 3, 1, 'Không hẵn delay', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(50, 102, 1, 1, '123', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(51, 101, 1, 1, 'Uầy', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(52, 101, 1, 1, 'Được rồi nè', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(53, 101, 1, 1, 'Nhắn ngon nghẻ rồi', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(54, 101, 3, 1, '1234', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(55, 101, 1, 1, '1234', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(56, 101, 1, 1, 'test', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(57, 101, 3, 1, 'cos ver la dc r', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(58, 101, 1, 1, 'Uk nhắn dc r', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(59, 101, 3, 1, 'test tin nhắn nè', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(60, 101, 1, 1, 'Nói chung nhắn lên phone là nhận dc', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(61, 101, 1, 1, 'đấy', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(62, 101, 1, 1, 'Rất mượt', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(63, 101, 1, 1, 'Test tin nn', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(64, 101, 1, 1, 'Nó nhận dc', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(65, 101, 3, 1, 'ok', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(66, 101, 1, 1, 'hello', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(67, 101, 1, 1, 'nhắn', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(68, 101, 3, 1, 'ok', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(69, 101, 1, 1, 'nhắn', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(70, 101, 3, 1, 'ok nhan', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(71, 102, 1, 1, '1234', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(72, 102, 1, 1, '4', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(73, 102, 3, 1, 'nhắn thử nè', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(74, 102, 3, 1, 'ok r', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(75, 102, 1, 1, 'Lố thời dung lượng r', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(76, 102, 3, 1, 'nhhasf', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(77, 102, 3, 1, '123', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(78, 102, 3, 1, 'laji naif', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(79, 102, 3, 1, '1234', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(80, 102, 1, 1, 'abc', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1),
(81, 102, 1, 1, 'xzy', '2024-11-08 13:01:01', '2024-11-08 13:01:01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dm_channel`
--

CREATE TABLE `dm_channel` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user2_id` int(11) NOT NULL,
  `create_at` datetime DEFAULT NULL,
  `flag` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `emoji`
--

CREATE TABLE `emoji` (
  `id` int(11) NOT NULL,
  `server_id` int(11) DEFAULT NULL,
  `emoji_img` blob DEFAULT NULL,
  `flag` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `img`
--

CREATE TABLE `img` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `content` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `server`
--

CREATE TABLE `server` (
  `id` int(11) NOT NULL,
  `server_name` varchar(255) DEFAULT NULL,
  `server_avt` blob DEFAULT NULL,
  `invite_link` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `server`
--

INSERT INTO `server` (`id`, `server_name`, `server_avt`, `invite_link`, `create_at`, `update_at`) VALUES
(1, 'server 1', NULL, NULL, NULL, NULL),
(2, 'server 2', NULL, NULL, NULL, NULL),
(3, 'server 3', NULL, NULL, NULL, NULL),
(4, 'server 4', NULL, NULL, NULL, NULL),
(5, 'server 5', NULL, NULL, NULL, NULL),
(6, 'server 6', NULL, NULL, NULL, NULL),
(7, 'server 7', NULL, NULL, NULL, NULL),
(8, 'server 8', NULL, NULL, NULL, NULL),
(9, 'server 9', NULL, NULL, NULL, NULL),
(10, 'server 10', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `server_channel`
--

CREATE TABLE `server_channel` (
  `id` int(11) NOT NULL,
  `server_id` int(11) NOT NULL,
  `channel_name` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `server_channel`
--

INSERT INTO `server_channel` (`id`, `server_id`, `channel_name`, `type`, `create_at`, `update_at`) VALUES
(101, 1, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(102, 1, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(103, 1, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(104, 1, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(105, 1, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(106, 1, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(107, 1, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(108, 1, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(109, 1, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(110, 1, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(111, 2, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(112, 2, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(113, 2, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(114, 2, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(115, 2, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(116, 2, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(117, 2, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(118, 2, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(119, 2, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(120, 2, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(121, 3, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(122, 3, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(123, 3, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(124, 3, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(125, 3, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(126, 3, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(127, 3, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(128, 3, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(129, 3, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(130, 3, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(131, 4, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(132, 4, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(133, 4, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(134, 4, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(135, 4, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(136, 4, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(137, 4, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(138, 4, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(139, 4, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(140, 4, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(141, 5, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(142, 5, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(143, 5, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(144, 5, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(145, 5, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(146, 5, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(147, 5, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(148, 5, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(149, 5, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(150, 5, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(151, 6, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(152, 6, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(153, 6, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(154, 6, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(155, 6, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(156, 6, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(157, 6, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(158, 6, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(159, 6, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(160, 6, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(161, 7, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(162, 7, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(163, 7, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(164, 7, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(165, 7, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(166, 7, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(167, 7, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(168, 7, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(169, 7, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(170, 7, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(171, 8, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(172, 8, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(173, 8, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(174, 8, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(175, 8, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(176, 8, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(177, 8, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(178, 8, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(179, 8, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(180, 8, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(181, 9, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(182, 9, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(183, 9, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(184, 9, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(185, 9, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(186, 9, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(187, 9, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(188, 9, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(189, 9, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(190, 9, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(191, 10, 'channel 1', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(192, 10, 'channel 2', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(193, 10, 'channel 3', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(194, 10, 'channel 4', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(195, 10, 'channel 5', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(196, 10, 'channel 6', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(197, 10, 'channel 7', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(198, 10, 'channel 8', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(199, 10, 'channel 9', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25'),
(200, 10, 'channel 10', 1, '2024-11-07 10:23:25', '2024-11-07 10:23:25');

-- --------------------------------------------------------

--
-- Table structure for table `server_user`
--

CREATE TABLE `server_user` (
  `server_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `flag` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `server_user`
--

INSERT INTO `server_user` (`server_id`, `user_id`, `flag`) VALUES
(1, 1, 1),
(1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sticker`
--

CREATE TABLE `sticker` (
  `id` int(11) NOT NULL,
  `server_id` int(11) DEFAULT NULL,
  `content` blob DEFAULT NULL,
  `flag` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sticker_message`
--

CREATE TABLE `sticker_message` (
  `sticker_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user_avt` blob DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `flag` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_avt`, `user_name`, `bio`, `email`, `password`, `create_at`, `flag`) VALUES
(1, NULL, 'dungdia', NULL, 'hoangdungnhocom@gmail.com', '12345678', '2024-10-26 16:19:41', 1),
(2, NULL, 'a', '', 'a@gmail.com', '12345678', '2024-11-05 13:15:42', 1),
(3, NULL, 'Dung', '', 'hoangdungnhocom2@gmail.com', '12345678', '2024-11-06 00:39:10', 1),
(4, NULL, 'deade', '', 'ded@gmail.com', '12345678', '2024-11-06 00:40:39', 1),
(5, NULL, 'dungdia3', '', 'hoangdungnhocom3@gmail.com', '12345678', '2024-11-07 01:42:17', 1),
(6, NULL, 'Dubg', '', 'hoangdungnhocom4@gmail.com', '12345678', '2024-11-07 02:08:27', 1),
(7, NULL, 'Abc', '', 'abc@gmail.com', '12345678', '2024-11-07 02:12:27', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `channel_message`
--
ALTER TABLE `channel_message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `channel_id` (`channel_id`);

--
-- Indexes for table `dm_channel`
--
ALTER TABLE `dm_channel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user2_id` (`user2_id`);

--
-- Indexes for table `emoji`
--
ALTER TABLE `emoji`
  ADD PRIMARY KEY (`id`),
  ADD KEY `server_id` (`server_id`);

--
-- Indexes for table `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `message_id` (`message_id`);

--
-- Indexes for table `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `server_channel`
--
ALTER TABLE `server_channel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `server_id` (`server_id`);

--
-- Indexes for table `server_user`
--
ALTER TABLE `server_user`
  ADD PRIMARY KEY (`server_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sticker`
--
ALTER TABLE `sticker`
  ADD PRIMARY KEY (`id`),
  ADD KEY `server_id` (`server_id`);

--
-- Indexes for table `sticker_message`
--
ALTER TABLE `sticker_message`
  ADD PRIMARY KEY (`sticker_id`,`message_id`),
  ADD KEY `message_id` (`message_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `channel_message`
--
ALTER TABLE `channel_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `dm_channel`
--
ALTER TABLE `dm_channel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `emoji`
--
ALTER TABLE `emoji`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `img`
--
ALTER TABLE `img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `server`
--
ALTER TABLE `server`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `server_channel`
--
ALTER TABLE `server_channel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `sticker`
--
ALTER TABLE `sticker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `channel_message`
--
ALTER TABLE `channel_message`
  ADD CONSTRAINT `channel_message_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `channel_message_ibfk_3` FOREIGN KEY (`channel_id`) REFERENCES `server_channel` (`id`);

--
-- Constraints for table `dm_channel`
--
ALTER TABLE `dm_channel`
  ADD CONSTRAINT `dm_channel_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `dm_channel_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `emoji`
--
ALTER TABLE `emoji`
  ADD CONSTRAINT `emoji_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server` (`id`);

--
-- Constraints for table `img`
--
ALTER TABLE `img`
  ADD CONSTRAINT `img_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `channel_message` (`id`);

--
-- Constraints for table `server_channel`
--
ALTER TABLE `server_channel`
  ADD CONSTRAINT `server_channel_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server` (`id`);

--
-- Constraints for table `server_user`
--
ALTER TABLE `server_user`
  ADD CONSTRAINT `server_user_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server` (`id`),
  ADD CONSTRAINT `server_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `sticker`
--
ALTER TABLE `sticker`
  ADD CONSTRAINT `sticker_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server` (`id`);

--
-- Constraints for table `sticker_message`
--
ALTER TABLE `sticker_message`
  ADD CONSTRAINT `sticker_message_ibfk_1` FOREIGN KEY (`sticker_id`) REFERENCES `sticker` (`id`),
  ADD CONSTRAINT `sticker_message_ibfk_2` FOREIGN KEY (`message_id`) REFERENCES `channel_message` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
