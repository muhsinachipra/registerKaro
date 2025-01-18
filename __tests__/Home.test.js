import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/pages/Home";

describe("Home Component", () => {
  const mockTasks = [
    { id: 1, title: "Test Task 1", description: "Description 1", completed: false, priority: "High" },
    { id: 2, title: "Test Task 2", description: "Description 2", completed: true, priority: "Medium" },
  ];

  beforeEach(() => {
    render(<Home />);
  });

  test("renders the task form", () => {
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Priority:")).toBeInTheDocument();
  });

  test("renders the task list", () => {
    const taskList = screen.getByText("No tasks available.");
    expect(taskList).toBeInTheDocument();
  });

  test("adds a new task", () => {
    fireEvent.change(screen.getByPlaceholderText("Title"), { target: { value: "New Task" } });
    fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "New Task Description" } });
    fireEvent.change(screen.getByLabelText("Priority:"), { target: { value: "Medium" } });
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("deletes a task", () => {
    // First, add a task to delete
    fireEvent.change(screen.getByPlaceholderText("Title"), { target: { value: "Task to Delete" } });
    fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "Description" } });
    fireEvent.click(screen.getByText("Save"));

    // Now delete the task
    fireEvent.click(screen.getByText("Delete"));

    expect(screen.queryByText("Task to Delete")).not.toBeInTheDocument();
  });
});