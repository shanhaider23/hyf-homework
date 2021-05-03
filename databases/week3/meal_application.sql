set names utf8mb4;
create database meal_application;
use meal_application;

CREATE table meal (
id INT unsigned not null auto_increment primary key,
title varchar (255) not null,
discription text,
location varchar(255) not null,
when_ datetime not null,
max_reservations int unsigned not null,
price DECIMAL  DEFAULT  NULL,
created_date date not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table reservation (
id INT unsigned not null auto_increment primary key,
number_of_guests int (11) not null,
meal_id INT unsigned not null,
created_date date not null,
email VARCHAR (100) NOT NULL,
phone_number VARCHAR (20) DEFAULT NULL,
contact_name VARCHAR (100) NOT NULL,
CONSTRAINT FK_mealReservation FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE table review (
id INT unsigned not null auto_increment primary key,
title varchar (255) not null,
discription text,
meal_id INT unsigned not null,
stars int not null,
created_date date not null,
CONSTRAINT FK_reviewReservation FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- meal
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (1, 'pizza', 'chicken pizza', 'Brondby',  '2020-01-01. 12:10:05.125', 5, 25.00, '2020-05-08' );
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (2, 'steak', 'Grilled steak', 'Brondby',  '2020-01-02. 12:55:05.123', 5, 69.00, '2020-04-08');
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (3, 'sandwich', 'Vegitable Sandwich', 'Brondby',  '2020-01-03. 10:55:05.123', 5, 125.00, '2020-04-08');
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (4, 'kebab', 'chicken kebab', 'Brondby',  '2020-02-03. 11:55:05.123', 5, 55.00, '2007-05-18');
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (5, 'coffe', 'tea coffe', 'Brondby',  '2020-01-05. 10:10:05.123', 5, 10.00, '2007-05-08');
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (7, 'butter chiken', 'chicken with butter cream and masala', 'Brondby',  '2020-08-11. 11:10:05.125', 3, 250.00, '2020-08-07' );
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (8, 'beryani', 'rice with chiken and masala', 'copenhagen',  '2020-06-12. 19:55:05.123', 4, 69.00, '2020-06-08');
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (9, 'bbq', 'BBQ chiken and meat', 'copenhagen',  '2020-11-03. 10:55:05.123', 3, 325.00, '2020-04-08');
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (10, 'soup', 'chicken corn soup, hot and sour soap', 'Brondby',  '2020-12-03. 11:55:05.123', 8, 115.00, '2020-08-06');
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) values (11, 'pasta', 'italian pasta with chili', 'Brondby',  '2020-01-05. 20:10:05.123', 5, 275.00, '2020-01-08');

-- reservation
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (1, 3, 2, '2020-08-15',  'test@gmail.com', 8845455, 'peter' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (2, 7, 3, '2020-05-01',  'test1@gmail.com', 7545455, 'jon' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (3, 5, 1, '2020-05-08',  'test2@gmail.com', 9545455, 'fleming' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (4, 2, 4, '2020-05-05',  'test3@gmail.com', 2545455, 'henrik' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (5, 5, 5, '2020-05-19',  'test4@gmail.com', 3545455, 'crok' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (6, 3, 2, '2020-08-11',  'test5@gmail.com', 8815455, 'shan' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (7, 7, 3, '2020-09-07',  'test16@gmail.com', 7445455, 'Henrik' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (8, 5, 1, '2020-08-12',  'test25@gmail.com', 9445455, 'geoge' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (9, 2, 8, '2020-08-11',  'test34@gmail.com', 2545455, 'steven' );
insert into reservation (id, number_of_guests, meal_id, created_date, email,phone_number, contact_name) values (10, 5, 7, '2020-07-19',  'test44@gmail.com', 1545455, 'Ahmad' );
-- review
insert into review (id, title, discription, meal_id, stars, created_date) values (1, 'pizza', 'good food', 5,  5, '2020-05-08' );
insert into review (id, title, discription, meal_id, stars, created_date) values (2, 'steak', 'bad food', 3,  1, '2020-04-08');
insert into review (id, title, discription, meal_id, stars, created_date) values (3, 'sandwich', 'average food', 1, 3, '2020-04-08');
insert into review (id, title, discription, meal_id, stars, created_date) values (4, 'kebab', 'good food', 2,  4, '2007-05-18');
insert into review (id, title, discription, meal_id, stars, created_date) values (5, 'coffe', 'good', 4,  4, '2007-05-08');
insert into review (id, title, discription, meal_id, stars, created_date) values (6, 'butter chiken', 'good food', 5,  5, '2020-07-08' );
insert into review (id, title, discription, meal_id, stars, created_date) values (7, 'beryani', 'average', 3,  3, '2020-09-08');
insert into review (id, title, discription, meal_id, stars, created_date) values (8, 'bbq', 'average food', 1, 2, '2020-11-11');
insert into review (id, title, discription, meal_id, stars, created_date) values (9, 'soup', 'good food', 2,  4, '2007-08-01');
insert into review (id, title, discription, meal_id, stars, created_date) values (10, 'pasta', 'exelent', 4,  5, '2007-09-08');