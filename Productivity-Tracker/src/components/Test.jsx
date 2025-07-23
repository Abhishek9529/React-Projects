import React from 'react'
import { useState, useEffect, useRef, useCallback } from "react";

const Test = () =>  {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  // Load tasks from localStorage on first render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Timer effect
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleAddTask = () => {
    if (currentTask.trim() !== "") {
      setTasks((prev) => [...prev, { name: currentTask, timeSpent: seconds }]);
      setCurrentTask("");
      setSeconds(0);
    }
  };

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleReset = useCallback(() => {
    setSeconds(0);
    setIsRunning(false);
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100 text-center">
      <h1 className="text-2xl font-bold mb-4">🧠 Productivity Tracker</h1>

      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        placeholder="Enter task name"
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>

      <div className="my-4">
        <h2 className="text-xl mb-2">⏱ Timer: {seconds} seconds</h2>
        <button onClick={handleStart} className="bg-green-500 text-white px-4 py-1 rounded mr-2">
          Start
        </button>
        <button onClick={handleStop} className="bg-yellow-500 text-white px-4 py-1 rounded mr-2">
          Stop
        </button>
        <button onClick={handleReset} className="bg-red-500 text-white px-4 py-1 rounded">
          Reset
        </button>
      </div>

      <hr className="my-4" />

      <h3 className="text-lg font-semibold">📋 Task List:</h3>
      <ul className="mt-2">
        {tasks.map((task, index) => (
          <li key={index} className="mb-1">
            ✅ {task.name} — {task.timeSpent} sec
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test
