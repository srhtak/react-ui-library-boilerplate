/// <reference types="react" />
export interface ButtonProps {
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    ref?: React.RefObject<HTMLButtonElement>;
}
