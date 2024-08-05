import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "./index";

test("renders select with options", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" }
  ];
  render(<Select label="Test Select" options={options} />);

  const selectElement = screen.getByLabelText(/test select/i);
  expect(selectElement).toBeInTheDocument();
  expect(selectElement.children.length).toBe(options.length);
});

test("renders select with error message", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" }
  ];
  render(<Select options={options} label="Test Select" error="This field is required." />);
  const errorMessage = screen.getByText(/this field is required/i);
  expect(errorMessage).toBeInTheDocument();
});
