DROP DATABASE IF EXISTS amazon;

CREATE DATABASE amazon;

USE amazon;

CREATE TABLE `photos` (
  `id` VARCHAR(15),
  `link` VARCHAR(255),
  `username` VARCHAR(128),
  `productTag` VARCHAR(64),
  `additionalTag` VARCHAR(64),
  PRIMARY KEY (`id`)
)