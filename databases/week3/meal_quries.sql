
-- Meal Queries
-- Get all meals
select title, discription, price 
from meal;

-- Add a new meal
insert into meal (id, title, discription, location, when_,max_reservations, price, created_date) 
values (6, 'pasta', 'italian pasta', 'copenhagen',  '2020-01-01. 12:10:05.125', 5, 175.00, '2020-12-08' );

-- Get a meal with any id
select * 
from meal 
where id = 1;

-- Update a meal with any id
UPDATE meal
SET title = 'italian pizza', location= 'copenhagen'
WHERE id = 1;
-- Delete a meal with any id
DELETE FROM meal
WHERE id = 6;

-- Get all reservation
select * 
from reservation;

-- Add a new reservation
insert into reservation (id, number_of_guests, meal_id, created_date, email, phone_number, contact_name) 
values (6, 5, 1, '2020-05-16',  'shan@gmail.com', 5588777, 'shan' );

-- Get a reservation with any id
select * 
from reservation
where id = 1;

-- Update a reservation with any id
UPDATE reservation
SET number_of_guests = 5, email= 'peter@gmail.com'
WHERE id = 1;
-- Delete a reservation with any id
DELETE FROM reservation
WHERE id = 6;

-- Get all review
select * 
from review;

-- Add a new review
insert into review (id, title, discription, meal_id, stars, created_date) 
values (6, 'italian pizza', 'very good', 1,  1, '2020-01-08' ); 


-- Get a review with any id
select * 
from review
where id = 1;

-- Update a review with any id
UPDATE review
SET title = 'large pizza' , stars= 4
WHERE id = 1;
-- Delete a review with any id
DELETE FROM review 
WHERE id = 6;
