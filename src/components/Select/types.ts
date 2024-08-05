import { type SelectHTMLAttributes } from "react";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<{ value: string, label: string }>
  label?: string
  error?: string
};
