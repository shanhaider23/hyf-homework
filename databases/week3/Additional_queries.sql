-- Additional Quries
-- Get meals that has a price smaller than a specific price fx 90
select * from meal where price <90;

-- Get meals that partially match a title
select * from meal where title like '%butter%'; 

-- Get meals that still has available reservations
SELECT meal.id as meal_id, title, discription, location, price, max_reservations, 
	COALESCE(SUM(number_of_guests), 0) AS total_reservations, 
    COALESCE((max_reservations - SUM(number_of_guests)), max_reservations) as available_spots
FROM meal
LEFT JOIN reservation
	ON meal.id = meal_id
GROUP BY meal.id
HAVING  max_reservations > total_reservations is null
order by available_spots;

-- Get meals that has been created between two dates
select * from meal 
where created_date between '2020-01-01' and '2020-12-01';

-- Get only specific number of meals fx return only 5 meals
select * from meal 
where id between 1 and 5;

-- Get the meals that have good reviews
select meal.title , review.stars
from meal inner join review on meal.id = review.meal_id
where stars >3 order by stars desc;

-- Get reservations for a specific meal sorted by created_date
select meal.id, meal.title, reservation.created_date, reservation.meal_id
from meal inner join reservation on meal.id = reservation.meal_id
order by created_date;

-- Sort all meals by average number of stars in the reviews.
select meal.title, AVG(review.stars) As avg_number_of_stars
from meal left join review on meal.id = review.meal_id
GROUP BY
    meal.id
ORDER BY
    avg_number_of_stars desc;

