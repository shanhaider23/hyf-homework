-- Part 3: More queries 

-- Get all the tasks assigned to users whose email ends in @spotify.com.
select * from user
join task on user.id = task.id
where email like '%@spotify.com';

-- Part4 :Get all the tasks for 'Donald Duck' with status 'Not started'

select user.name, task.title
from user
	join user_task on user_task.user_id=user.id
    join task on user_task.task_id=task.id
    join status on task.status_id=status.id
where status.name = 'Not started' and  user.name  = 'Donald Duck';

-- Get all the tasks for 'Maryrose Meadows' that were created in september.

SELECT task.title, user.name, task.created
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND month(created)= 9;
-- Find how many tasks where created in each month.
SELECT created, COUNT(id) FROM task GROUP BY MONTH(created);