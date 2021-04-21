set names utf8mb4;

create database homework2;
use homework2;

CREATE table users (
id INT unsigned not null auto_increment primary key,
username varchar(255) not null,
created_date date not null,
updated_date date not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table authors(
id INT unsigned not null auto_increment primary key,
First_name varchar (255) not null,
Last_name varchar (255) not null,
created_date date not null,
updated_date date not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table books(
id INT unsigned not null auto_increment primary key,
title varchar (255) not null,
date_of_publish smallint unsigned not null,
genre varchar(255) not null,
created_date date not null,
updated_date date not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table favourites(
user_id int unsigned not null,
book_id int unsigned not null,
created_at date not null,
updated_at date not null,
PRIMARY KEY(`user_id`, `book_id`),
  CONSTRAINT `fk_favourites_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_favourites_book` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table author_books(
author_id int unsigned not null,
book_id int unsigned not null,
PRIMARY KEY(`author_id`, `book_id`),
  CONSTRAINT `fk_author_books_author` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_author_books_book` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;