-- Part 1: Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
-- task
insert into task 
(title, description, created, updated, due_date, status_id, user_id) 
 values ('homework' , 'Week 2 homework', NOW(), '2020-10-28 03:09:06','2021-09-28 03:09:06',1,1);
 
-- Change the title of a task and due date also Mark a task as complete .
UPDATE task 
SET 
    title = 'Changed homework',
    due_date = now(),
    status_id= 3
WHERE
    id = 37;

-- Delete a task
DELETE FROM task
WHERE id = 3;