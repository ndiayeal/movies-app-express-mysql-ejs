CREATE DATABASE IF NOT EXISTS `movie_app_db`;
use `movie_app_db`;

CREATE TABLE IF NOT EXISTS `movie_app_db`.`movie` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NULL,
  `year` VARCHAR(10) NOT NULL,
  `author` VARCHAR(100) NOT NULL
);

ALTER TABLE movie
ADD COLUMN is_serie BOOLEAN DEFAULT FALSE;

ALTER TABLE movie
ADD COLUMN genre VARCHAR(100);


INSERT INTO
  `movie_app_db`.`movie` (`title`, `description`, `year`, `author`)
VALUES
  ('TEST', 'neant', 2023, 'TOTO'),
  ('Don''t look up', 'neant', 2021, 'Adam McKay'),
  ('Une vérité qui dérange', 'neant', 2006, 'Davis Guggenheim'),
  ('Melencholia', 'neant', 2011, 'Lars von Trier'),
  ('Beasts of the southern wild', 'neant', 2012, 'Benh Zeitlin'),
  ('Sauve qui peut (la vie)', 'neant', 1980, 'Jean-Luc Godard'),
  ('Nope', 'neant', 2022, 'Jordan Peele'),
  ('L''amour à mort', 'neant', 1984, 'Alain Resnais');



CREATE TABLE `user` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `email` varchar(100) DEFAULT '',
  `password` varchar(100) NOT NULL,
  `session_id` varchar(100) NOT NULL DEFAULT ''
);

ALTER TABLE movie ADD COLUMN user_id INT;


ALTER TABLE movie
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES user(id)
ON DELETE RESTRICT
ON UPDATE RESTRICT;


INSERT INTO `user` (`id`, `first_name`, `last_name`, `user_name`, `email`, `password`, `session_id`) VALUES
(null, 'Moussa', 'SOW', 'msow', 'msow@gmail.com', 'password', '');