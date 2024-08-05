// src/components/Input/input.stories.tsx
import Input from "./index";

export default {
  title: "MyComponents/Input",
  component: Input
};

export const DefaultInput = (): JSX.Element => (
    <Input label="Input Label" placeholder="Type here..." />
);

export const InputWithError = (): JSX.Element => (
    <Input label="Input Label" placeholder="Type here..." error="Error message" />
);
