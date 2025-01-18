import React, { useState } from "react";

function TaskForm({ onSave, onCancel, initialTask }) {
  const [task, setTask] = useState(
    initialTask || {
      title: "",
      description: "",
      priority: "Medium",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) {
      alert("Title is required.");
      return;
    }
    onSave(task);
    setTask({
      title: "",
      description: "",
      priority: "Medium",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    >
      <h3>{initialTask ? "Edit Task" : "Create Task"}</h3>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Description:
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            rows="3"
            style={{
              marginLeft: "10px",
              padding: "5px",
              width: "100%",
              resize: "none",
            }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Priority:
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
      </div>
      <button type="submit" style={{ marginRight: "10px" }}>
        Save
      </button>
      <button type="button" onClick={onCancel} style={{ color: "white" }}>
        Cancel
      </button>
    </form>
  );
}

export default TaskForm;