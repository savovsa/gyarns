CREATE TABLE `colors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`hexCode` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `manufacturers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`country` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `products` (
	`slug` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`price` real NOT NULL,
	`currency` text NOT NULL,
	`createdAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`quantity` real NOT NULL,
	`quantityUnitType` text NOT NULL,
	`weightGrams` real,
	`colorId` integer,
	`manufacturerId` integer,
	`model` text,
	`content` text,
	`fiberQuantity` integer,
	`metersPer100gPer1Fiber` integer,
	`metersPer100gPerAllFibers` integer,
	FOREIGN KEY (`colorId`) REFERENCES `colors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`manufacturerId`) REFERENCES `manufacturers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `slugIndex` ON `products` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `nameIndex` ON `products` (`name`);