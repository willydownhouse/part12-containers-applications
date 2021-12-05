import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("renders Todo component", () => {
  render(<Todo text="Pese pyykit" />);
  const todoElement = screen.getByText("Pese pyykit");
  expect(todoElement).toBeInTheDocument();
});
