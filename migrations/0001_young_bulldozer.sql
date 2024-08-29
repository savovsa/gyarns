/*
 SQLite does not support "Dropping foreign key" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
ALTER TABLE `colors` ADD `l` real NOT NULL;--> statement-breakpoint
ALTER TABLE `colors` ADD `a` real NOT NULL;--> statement-breakpoint
ALTER TABLE `colors` ADD `b` real NOT NULL;--> statement-breakpoint
ALTER TABLE `products` ADD `color_l` real NOT NULL;--> statement-breakpoint
ALTER TABLE `products` ADD `color_a` real NOT NULL;--> statement-breakpoint
ALTER TABLE `products` ADD `color_b` real NOT NULL;--> statement-breakpoint
ALTER TABLE `colors` DROP COLUMN `hexCode`;--> statement-breakpoint
ALTER TABLE `products` DROP COLUMN `colorId`;