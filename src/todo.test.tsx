import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./components/Todo.tsx";

test("добавление новой задачи", () => {
  render(<Todo/>);
  const input = screen.getByPlaceholderText("Добавить задачу");
  const addButton = screen.getByText("Добавить");

  fireEvent.change(input, { target: { value: "Новая задача" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Новая задача")).toBeInTheDocument();
});

test("переключение выполнения задачи", () => {
  render(<Todo/>);
  const input = screen.getByPlaceholderText("Добавить задачу");
  const addButton = screen.getByText("Добавить");

  fireEvent.change(input, { target: { value: "Сделать тест" } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(screen.getByText("Сделать тест")).toHaveClass("todo-completed");
});
