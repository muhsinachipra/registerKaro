import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function TaskCard({ task, onToggleComplete, onDelete, onEdit }) {
  return (
    <motion.div
      className="task-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>
        <Link to={`/task/${task.id}`}>{task.title}</Link>
      </h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p className={task.completed ? "completed" : "incomplete"}>
        {task.completed ? "Completed" : "Incomplete"}
      </p>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </motion.div>
  );
}

export default TaskCard;
