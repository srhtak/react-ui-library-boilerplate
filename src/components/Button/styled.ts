// src/components/Button/styled.ts
import styled, { css } from "styled-components";

const buttonVariants = {
  primary: css`
    background-color: #007bff;
    color: white;
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
  `,
  danger: css`
    background-color: #dc3545;
    color: white;
  `
};

const buttonSizes = {
  small: css`
    font-size: 12px;
    padding: 5px 10px;
  `,
  medium: css`
    font-size: 14px;
    padding: 8px 12px;
  `,
  large: css`
    font-size: 16px;
    padding: 10px 15px;
  `
};

export const Button = styled.button<{
  size: "small" | "medium" | "large"
  variant: "primary" | "secondary" | "danger"
}>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ size }) => buttonSizes[size]}
  ${({ variant }) => buttonVariants[variant]}


  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
