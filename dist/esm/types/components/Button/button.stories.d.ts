/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<import("./types").ButtonProps & Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    on: {
        click: import("@storybook/addon-actions").HandlerFunction;
    };
};
export default _default;
export declare const Primary: () => JSX.Element;
export declare const Secondary: () => JSX.Element;
export declare const Default: () => JSX.Element;
export declare const Sizes: () => JSX.Element;
export declare const DisabledAll: () => JSX.Element;
export declare const Types: () => JSX.Element;
