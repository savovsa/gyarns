CREATE TABLE `colors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`l` real NOT NULL,
	`a` real NOT NULL,
	`b` real NOT NULL
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
	`image` text DEFAULT '' NOT NULL,
	`currency` text NOT NULL,
	`createdAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`quantity` real NOT NULL,
	`quantityUnitType` text NOT NULL,
	`weightGrams` real,
	`color_l` real NOT NULL,
	`color_a` real NOT NULL,
	`color_b` real NOT NULL,
	`manufacturerId` integer,
	`model` text,
	`content` text,
	`fiberQuantity` integer,
	`metersPer100gPer1Fiber` integer,
	`metersPer100gPerAllFibers` integer,
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