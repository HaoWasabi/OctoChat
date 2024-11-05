CREATE TABLE `server` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `server_name` varchar(255),
  `server_avt` blob,
  `invite_link` varchar(255),
  `create_at` datetime,
  `update_at` datetime
);

CREATE TABLE `emoji` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `server_id` int,
  `emoji_img` blob,
  `flag` int DEFAULT 1
);

CREATE TABLE `sticker` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `server_id` int,
  `content` blob,
  `flag` int DEFAULT 1
);

CREATE TABLE `sticker_message` (
  `sticker_id` int NOT NULL,
  `message_id` int NOT NULL,
  PRIMARY KEY (`sticker_id`, `message_id`)
);

CREATE TABLE `Server_Channel` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `server_id` int NOT NULL,
  `type` int,
  `create_at` datetime,
  `update_at` datetime
);

CREATE TABLE `Channel_Message` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `channel_id` int NOT NULL,
  `user_id` int NOT NULL,
  `channel_type` int,
  `message` varchar(255),
  `create_at` datetime,
  `update_at` datetime,
  `flag` int DEFAULT 0
);

CREATE TABLE `img` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `message_id` int,
  `content` blob
);

CREATE TABLE `server_user` (
  `server_id` int NOT NULL,
  `user_id` int NOT NULL,
  `flag` int DEFAULT 1,
  PRIMARY KEY (`server_id`, `user_id`)
);

CREATE TABLE `user` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_avt` blob,
  `user_name` varchar(255),
  `bio` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `create_at` datetime,
  `flag` int DEFAULT 1
);

CREATE TABLE `DM_Channel` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `user2_id` int NOT NULL,
  `create_at` datetime,
  `flag` int DEFAULT 0
);

ALTER TABLE `server_user` ADD FOREIGN KEY (`server_id`) REFERENCES `server` (`id`);

ALTER TABLE `server_user` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `Server_Channel` ADD FOREIGN KEY (`server_id`) REFERENCES `server` (`id`);

ALTER TABLE `Channel_Message` ADD FOREIGN KEY (`channel_id`) REFERENCES `Server_Channel` (`id`);

ALTER TABLE `Channel_Message` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `emoji` ADD FOREIGN KEY (`server_id`) REFERENCES `server` (`id`);

ALTER TABLE `sticker_message` ADD FOREIGN KEY (`sticker_id`) REFERENCES `sticker` (`id`);

ALTER TABLE `sticker_message` ADD FOREIGN KEY (`message_id`) REFERENCES `Channel_Message` (`id`);

ALTER TABLE `sticker` ADD FOREIGN KEY (`server_id`) REFERENCES `server` (`id`);

ALTER TABLE `DM_Channel` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `DM_Channel` ADD FOREIGN KEY (`user2_id`) REFERENCES `user` (`id`);

ALTER TABLE `img` ADD FOREIGN KEY (`message_id`) REFERENCES `Channel_Message` (`id`);

ALTER TABLE `Channel_Message` ADD FOREIGN KEY (`channel_id`) REFERENCES `DM_Channel` (`id`);
