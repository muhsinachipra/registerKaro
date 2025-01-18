// task-management-app\src\pages\Home.js

import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import { loadTasks, saveTasks } from "../utils/localStorage";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Date");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isDragged, setIsDragged] = useState(false);

  useEffect(() => {
    const loadedTasks = loadTasks();
    setTasks(loadedTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setIsDragged(false);
  }, [sort]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true; // "All"
  });

  const sortedTasks = !isDragged
    ? [...filteredTasks].sort((a, b) => {
      if (sort === "Priority") {
        const priorities = { High: 1, Medium: 2, Low: 3 };
        return priorities[a.priority] - priorities[b.priority];
      }
      return a.id - b.id; // Sort by creation date
    })
    : filteredTasks; // Retain the drag-and-drop order

  const handleSaveTask = (task) => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === editingTask.id ? { ...task, id: t.id } : t))
      );
    } else {
      setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now(), completed: false }]);
    }
    setIsEditing(false);
    setEditingTask(null);
    setIsDragged(false);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  const handleDragStateChange = () => setIsDragged(true);

  return (
    <div>
      <h2>Task Management</h2>
      {isEditing ? (
        <TaskForm
          onSave={handleSaveTask}
          onCancel={() => setIsEditing(false)}
          initialTask={editingTask}
        />
      ) : (
        <TaskForm onSave={handleSaveTask} />
      )}
      <TaskFilter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <TaskList
        tasks={sortedTasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
        setTasks={setTasks}
        onDrag={handleDragStateChange}
      />
    </div>
  );
}

export default Home;