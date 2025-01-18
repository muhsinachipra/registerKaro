import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../src/components/TaskList";

describe("TaskList Component", () => {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1", completed: false, priority: "High" },
    { id: 2, title: "Task 2", description: "Description 2", completed: true, priority: "Medium" },
  ];

  const mockToggleComplete = jest.fn();
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();
  const setTasks = jest.fn();

  beforeEach(() => {
    render(
      <TaskList
        tasks={tasks}
        onToggleComplete={mockToggleComplete}
        onDelete={mockDelete}
        onEdit={mockEdit}
        setTasks={setTasks}
      />
    );
  });

  test("renders the task list", () => {
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  test("calls onToggleComplete when the complete button is clicked", () => {
    fireEvent.click(screen.getByText("Mark Complete"));
    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  test("calls onDelete when the delete button is clicked", () => {
    fireEvent.click(screen.getByText("Delete"));
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test("calls onEdit when the edit button is clicked", () => {
    fireEvent.click(screen.getByText("Edit"));
    expect(mockEdit).toHaveBeenCalledWith(tasks[0]);
  });

  test("displays a message when there are no tasks", () => {
    render(<TaskList tasks={[]} onToggleComplete={mockToggleComplete} onDelete={mockDelete} onEdit={mockEdit} setTasks={setTasks} />);
    expect(screen.getByText("No tasks available.")).toBeInTheDocument();
  });
});