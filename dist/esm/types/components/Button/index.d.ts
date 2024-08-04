import React from "react";
import { type ButtonProps } from "./types";
import { type ComponentPropsWithoutRef } from "react";
type ButtonPropsWithRef = ButtonProps & ComponentPropsWithoutRef<"button">;
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonPropsWithRef, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
