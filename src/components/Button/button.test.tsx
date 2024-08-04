/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// src/components/Button/index.test.tsx
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const childrenText = getByText(/click me/i);
    expect(childrenText).toBeInTheDocument();
  });

  // it("applies default props correctly", () => {
  //   const { getByTestId } = render(<Button size="medium">Click me</Button>);
  //   const buttonElement = getByTestId("button");

  //   expect(buttonElement).toHaveAttribute("variant", "primary");
  //   expect(buttonElement).toHaveAttribute("size", "medium");
  //   expect(buttonElement).not.toBeDisabled();
  // });

  it("applies given props correctly", () => {
    render(
      <Button variant="secondary" size="large" disabled>
        Click me
      </Button>
    );
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveAttribute("variant", "secondary");
    expect(buttonElement).toHaveAttribute("size", "large");
    expect(buttonElement).toBeDisabled();
  });

  it("handles onClick event correctly", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
