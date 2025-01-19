// src\pages\TaskDetail.js

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadTasks } from "../utils/localStorage";

function TaskDetail() {
  const { id } = useParams(); // Get the task ID from the URL
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const tasks = loadTasks();
    const fetchedTask = tasks.find((t) => t.id === parseInt(id));
    setTask(fetchedTask);
  }, [id]);

  const handleEdit = () => {
    navigate("/", { state: { taskToEdit: task } });
  };

  return (
    <div>
      <h2>Task Detail</h2>
      {task ? (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>
            Priority: <strong>{task.priority}</strong>
          </p>
          <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
          <button onClick={handleEdit}>Edit Task</button>
        </div>
      ) : (
        <p>Loading task...</p>
      )}
    </div>
  );
}

export default TaskDetail;