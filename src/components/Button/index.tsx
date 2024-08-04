// src/components/Button/index.tsx
import React from "react";
import { type ButtonProps } from "./types";
import { Button as StyledButton } from "./styled";
import { type ComponentPropsWithoutRef } from "react";

// ButtonProps üzerine ComponentPropsWithoutRef ekleyin.
type ButtonPropsWithRef = ButtonProps & ComponentPropsWithoutRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonPropsWithRef>(
  (props, ref) => {
    Button.displayName = "Button";
    const {
      variant = "primary",
      size = "medium",
      disabled = false,
      onClick,
      children,
      ...rest
    } = props;

    return (
      <StyledButton
        data-testid="button"
        ref={ref}
        variant={variant}
        size={size}
        disabled={disabled}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
