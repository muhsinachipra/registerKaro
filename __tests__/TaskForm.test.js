import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../src/components/TaskForm";

describe("TaskForm Component", () => {
  const mockOnSave = jest.fn();
  const mockOnCancel = jest.fn();

  test("renders form with initial values", () => {
    render(<TaskForm onSave={mockOnSave} onCancel={mockOnCancel} initialTask={{ title: "Test Task", description: "Test Description", priority: "Medium" }} />);
    
    expect(screen.getByLabelText(/title/i)).toHaveValue("Test Task");
    expect(screen.getByLabelText(/description/i)).toHaveValue("Test Description");
    expect(screen.getByLabelText(/priority/i)).toHaveValue("Medium");
  });

  test("calls onSave with correct data on form submission", () => {
    render(<TaskForm onSave={mockOnSave} onCancel={mockOnCancel} />);
    
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: "New Task" } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: "New Description" } });
    fireEvent.change(screen.getByLabelText(/priority/i), { target: { value: "High" } });
    
    fireEvent.click(screen.getByText(/save/i));
    
    expect(mockOnSave).toHaveBeenCalledWith({
      title: "New Task",
      description: "New Description",
      priority: "High",
    });
  });

  test("calls onCancel when cancel button is clicked", () => {
    render(<TaskForm onSave={mockOnSave} onCancel={mockOnCancel} />);
    
    fireEvent.click(screen.getByText(/cancel/i));
    
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test("shows alert if title is empty on submission", () => {
    render(<TaskForm onSave={mockOnSave} onCancel={mockOnCancel} />);
    
    fireEvent.click(screen.getByText(/save/i));
    
    expect(mockOnSave).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Title is required.");
  });
});