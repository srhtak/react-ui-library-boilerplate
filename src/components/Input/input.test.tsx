import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./index";

test("renders input with label", () => {
  render(<Input label="Test Input" placeholder="Enter text..." />);
  const inputElement = screen.getByPlaceholderText(/enter text/i);
  expect(inputElement).toBeInTheDocument();
});

test("renders input with error message", () => {
  render(<Input label="Test Input" error="This is an error." />);
  const errorMessage = screen.getByText(/this is an error/i);
  expect(errorMessage).toBeInTheDocument();
});
