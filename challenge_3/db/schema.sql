DROP DATABASE IF EXISTS user;

CREATE DATABASE user;
USE user;

CREATE TABLE 'userData' (
    `id` INTEGER AUTO_INCREMENT,
    `name` VARCHAR(30),
    `email` VARCHAR(120),
    `password` VARCHAR(50),
    `addressLineOne` VARCHAR(80),
    `addressLineTwo` VARCHAR(120),
    `city` VARCHAR(60),
    `state` VARCHAR(2),
    `phone` VARCHAR(10),
    `creditCard` VARCHAR(16),
    `expiration` VARCHAR(4),
    `cvv` VARCHAR(4),
    `zipCode` VARCHAR(6),

    PRIMARY KEY (`name`)

    
)