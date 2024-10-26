-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `channel_message` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`channel_id` int(11) NOT NULL,
	`user_id` int(11) NOT NULL,
	`channel_type` int(11) DEFAULT 'NULL',
	`message` varchar(255) DEFAULT 'NULL',
	`create_at` datetime DEFAULT 'NULL',
	`update_at` datetime DEFAULT 'NULL',
	`flag` int(11) DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `dm_channel` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_id` int(11) NOT NULL,
	`user2_id` int(11) NOT NULL,
	`create_at` datetime DEFAULT 'NULL',
	`flag` int(11) DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `emoji` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`server_id` int(11) DEFAULT 'NULL',
	`emoji_img` blob DEFAULT 'NULL',
	`flag` int(11) DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `img` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`message_id` int(11) DEFAULT 'NULL',
	`content` blob DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `server` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`server_name` varchar(255) DEFAULT 'NULL',
	`server_avt` blob DEFAULT 'NULL',
	`invite_link` varchar(255) DEFAULT 'NULL',
	`create_at` datetime DEFAULT 'NULL',
	`update_at` datetime DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `server_channel` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`server_id` int(11) NOT NULL,
	`type` int(11) DEFAULT 'NULL',
	`create_at` datetime DEFAULT 'NULL',
	`update_at` datetime DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `server_user` (
	`server_id` int(11) NOT NULL,
	`user_id` int(11) NOT NULL,
	`flag` int(11) DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `sticker` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`server_id` int(11) DEFAULT 'NULL',
	`content` blob DEFAULT 'NULL',
	`flag` int(11) DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `sticker_message` (
	`sticker_id` int(11) NOT NULL,
	`message_id` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`user_avt` blob DEFAULT 'NULL',
	`user_name` varchar(255) DEFAULT 'NULL',
	`bio` varchar(255) DEFAULT 'NULL',
	`email` varchar(255) DEFAULT 'NULL',
	`password` varchar(255) DEFAULT 'NULL',
	`create_at` datetime DEFAULT 'NULL',
	`flag` int(11) DEFAULT 1
);
--> statement-breakpoint
ALTER TABLE `channel_message` ADD CONSTRAINT `channel_message_ibfk_1` FOREIGN KEY (`channel_id`) REFERENCES `server_channel`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `channel_message` ADD CONSTRAINT `channel_message_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `channel_message` ADD CONSTRAINT `channel_message_ibfk_3` FOREIGN KEY (`channel_id`) REFERENCES `dm_channel`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `dm_channel` ADD CONSTRAINT `dm_channel_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `dm_channel` ADD CONSTRAINT `dm_channel_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `user`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `emoji` ADD CONSTRAINT `emoji_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `img` ADD CONSTRAINT `img_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `channel_message`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `server_channel` ADD CONSTRAINT `server_channel_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `server_user` ADD CONSTRAINT `server_user_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `server_user` ADD CONSTRAINT `server_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `sticker` ADD CONSTRAINT `sticker_ibfk_1` FOREIGN KEY (`server_id`) REFERENCES `server`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `sticker_message` ADD CONSTRAINT `sticker_message_ibfk_1` FOREIGN KEY (`sticker_id`) REFERENCES `sticker`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `sticker_message` ADD CONSTRAINT `sticker_message_ibfk_2` FOREIGN KEY (`message_id`) REFERENCES `channel_message`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
CREATE INDEX `user_id` ON `channel_message` (`user_id`);--> statement-breakpoint
CREATE INDEX `channel_id` ON `channel_message` (`channel_id`);--> statement-breakpoint
CREATE INDEX `user_id` ON `dm_channel` (`user_id`);--> statement-breakpoint
CREATE INDEX `user2_id` ON `dm_channel` (`user2_id`);--> statement-breakpoint
CREATE INDEX `server_id` ON `emoji` (`server_id`);--> statement-breakpoint
CREATE INDEX `message_id` ON `img` (`message_id`);--> statement-breakpoint
CREATE INDEX `server_id` ON `server_channel` (`server_id`);--> statement-breakpoint
CREATE INDEX `user_id` ON `server_user` (`user_id`);--> statement-breakpoint
CREATE INDEX `server_id` ON `sticker` (`server_id`);--> statement-breakpoint
CREATE INDEX `message_id` ON `sticker_message` (`message_id`);
*/