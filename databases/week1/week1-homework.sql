-- 1- Find out how many tasks are in the task table.
select count(*) as Total_number_of_task from task;

-- 2- Find out how many tasks in the task table do not have a valid due date.
select sum(case when due_date IS NULL then 1 else 0 end) as NUMBER_OF_NULL_VALUE from task;
select * from task where due_date is null;

-- 3- Find all the tasks that are marked as done.
select * 
from task 
join status on task.status_id = status.id 
where status.name  = 'Done';

-- 4- Find all the tasks that are not marked as done
select * 
from task 
join status on task.status_id = status.id 
where status.name  != 'Done';

-- 5- Get all the tasks, sorted with the most recently created first
SELECT * 
FROM task
ORDER BY created desc;

-- 6- Get the single most recently created task
SELECT * 
FROM task
ORDER BY created desc
limit 1;

-- 7- Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task
where task.title like '%database%' or task.description like '%database%';

-- 8- Get the title and status (as text) of all tasks
select task.title, status.name
from task
left join status
on  task.status_id = status.id;
 
-- 9- Get the name of each status, along with a count of how many tasks have that status
select status.name, count(task.id)
from status
join task on status.id = task.status_id
group by status.name;

-- 10- Get the names of all statuses, sorted by the status with most tasks first
select  status.name , count(status.name) as tasks_count
from status
join task on status.id = task.status_id
group by status.name
order by count(status.name) desc ;