CREATE DATABASE IF NOT EXISTS burgers_db;
USE rxn6d7tozwdu5v0w;


DROP TABLE IF EXISTS burgers;


CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);
