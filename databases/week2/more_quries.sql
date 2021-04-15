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
where status.name = 'Not started' or  user.name  = 'Donald Duck';

-- Get all the tasks for 'Maryrose Meadows' that were created in september.

select user.name, task.title, task.created
from user
	join user_task on user_task.user_id=user.id
    join task on user_task.task_id=task.id
    join status on task.status_id=status.id
where user.name = 'Maryrose Meadows' and month(created)  = 09;

-- Find how many tasks where created in each month.
SELECT created, COUNT(id) FROM task GROUP BY MONTH(created);