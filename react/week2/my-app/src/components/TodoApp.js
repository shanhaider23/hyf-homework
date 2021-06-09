import React, { useState } from "react";
import "./todoapp.css";
import TimeUsed from "./TimeUsed";

function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: task + Math.floor(Math.random() * 1000) + new Date(),
        value: task,
        isCompleted: false,
      };

      setTaskList([...taskList, taskDetails]);
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //let's find index of element
    const element = taskList.findIndex((elem) => elem.id === id);

    //copy array into new variable
    const newTaskList = [...taskList];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <TimeUsed />
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>
      <br />
      {taskList !== [] ? (
        <ul>
          {taskList.map((task) => (
            <li
              key={task.id}
              className={task.isCompleted ? "crossText" : "listitem"}
            >
              {task.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, task.id)}
              >
                Completed
              </button>

              <button
                className="delete"
                onClick={(e) => deleteTask(e, task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
