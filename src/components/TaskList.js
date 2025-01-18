// task-management-app\src\components\TaskList.js

import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

// Function to reorder tasks after drag-and-drop
const reorder = (tasks, startIndex, endIndex) => {
  const result = Array.from(tasks);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function TaskList({ tasks, onToggleComplete, onDelete, onEdit, setTasks, onDrag }) {
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.index !== destination.index) {
      const reorderedTasks = reorder(tasks, source.index, destination.index);
      setTasks(reorderedTasks); // Update the tasks state
      onDrag();
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        marginBottom: "15px",
                      }}
                    >
                      <TaskCard
                        task={task}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                        onEdit={onEdit}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <p>No tasks available.</p>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TaskList;