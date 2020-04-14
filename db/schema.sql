CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    burger_type VARCHAR (60),
    eat BOOLEAN
);

SELECT * FROM burgers;