import React, { useCallback, useState, useRef } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { Task } from "./types/tasklist";
import TaskListEntry from "./components/TaskListEntry";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "jump",
      isCompleted: false,
      createdAt: new Date(),
    },
  ]);
  const [taskInput, setTaskInput] = useState("");
  const inputTaskRef = useRef<HTMLInputElement>(null);

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: nanoid(),
      title: taskInput,
      isCompleted: false,
      createdAt: new Date(),
    };
    setTasks([newTask, ...tasks]);
    setTaskInput("");
    if (inputTaskRef.current === null) return;
    inputTaskRef.current.focus();
  };

  const handleTaskInput = useCallback((input: string) => {
    setTaskInput(input);
  }, []);

  return (
    <div className="app-container">
      <h1>Your Tasks</h1>
      <form onSubmit={(e) => addNewTask(e)}>
        <input
          ref={inputTaskRef}
          type="text"
          name="title"
          id="title"
          value={taskInput}
          onChange={(e) => handleTaskInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.length > 0 && tasks.map((task) => <TaskListEntry data={task} />)}
      </ul>
    </div>
  );
}

export default App;
