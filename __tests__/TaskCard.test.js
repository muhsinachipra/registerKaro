import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "../src/components/TaskCard";

describe("TaskCard Component", () => {
  const task = {
    id: 1,
    title: "Test Task",
    description: "This is a test task",
    completed: false,
    priority: "High",
  };

  const mockToggleComplete = jest.fn();
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();

  test("renders task details", () => {
    render(
      <TaskCard
        task={task}
        onToggleComplete={mockToggleComplete}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("This is a test task")).toBeInTheDocument();
    expect(screen.getByText("Priority: High")).toBeInTheDocument();
  });

  test("calls toggleComplete on button click", () => {
    render(
      <TaskCard
        task={task}
        onToggleComplete={mockToggleComplete}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );

    fireEvent.click(screen.getByText("Mark Complete"));
    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  test("calls delete on button click", () => {
    render(
      <TaskCard
        task={task}
        onToggleComplete={mockToggleComplete}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test("calls edit on button click", () => {
    render(
      <TaskCard
        task={task}
        onToggleComplete={mockToggleComplete}
        onDelete={mockDelete}
        onEdit={mockEdit}
      />
    );

    fireEvent.click(screen.getByText("Edit"));
    expect(mockEdit).toHaveBeenCalledWith(task);
  });
});