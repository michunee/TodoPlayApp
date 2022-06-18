-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 18, 2022 lúc 05:45 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `todo-data`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `player`
--

CREATE TABLE `player` (
  `idPlayer` int(11) NOT NULL,
  `namePlayer` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `phonenumber` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `detail` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `player`
--

INSERT INTO `player` (`idPlayer`, `namePlayer`, `email`, `position`, `phonenumber`, `address`, `detail`) VALUES
(2, 'Muserchi', 'muserchi12@gmail.com', 'Buy food', '090219939', 'Da Nang', 'Go to Mart and buy:\r\n-Chicken\r\n-Flour\r\n-Sausage\r\n-Egg\r\n-Vegetable'),
(3, 'Michune', 'Michunee97@gmail.com', 'Washing dishes', '09374777', 'Da Nang', 'Only washing dishes :))'),
(4, 'Hamiii', 'micute@gmail.com', 'Buy game ', '093881881', 'Da Nang', 'Buy some video games for the party in the market\r\n5 game is less'),
(5, 'linhcute', 'linhcute@gmail.com', 'Prepare dinner table', '096252535', 'Da Nang', 'Prepare the dinner table :\r\ndishes, food...'),
(17, 'Akashi', 'akakshii@gmail.com', 'Buy wine', '0921877311', 'Da Nang', 'Buy wine for dinner:\r\n- Soju, Vodka, Chivas'),
(19, 'lindanle', 'linhdanle@gmail.com', 'Play guitar', '0826773713', 'Da Nang', 'Play guitar for the party\r\nList to play: \r\n- Co em\r\n- Yeu la gi\r\n- Nang tho\r\n- ...');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `todo`
--

CREATE TABLE `todo` (
  `idTodo` int(11) NOT NULL,
  `itemTodo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `todo`
--

INSERT INTO `todo` (`idTodo`, `itemTodo`) VALUES
(12, 'Buying some food for party'),
(13, 'Go to MiChu home'),
(14, 'Prepare the play zone'),
(15, 'Cooking some food'),
(16, 'Eating and play some game'),
(21, 'Watching movie'),
(22, 'Play video game'),
(25, 'Go to bed');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`idPlayer`);

--
-- Chỉ mục cho bảng `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`idTodo`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `player`
--
ALTER TABLE `player`
  MODIFY `idPlayer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `todo`
--
ALTER TABLE `todo`
  MODIFY `idTodo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
