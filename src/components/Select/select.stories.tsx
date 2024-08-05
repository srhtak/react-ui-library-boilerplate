// src/components/Select/select.stories.tsx
import Select from "./index";

export default {
  title: "MyComponents/Select",
  component: Select
};

export const BasicSelect = (): JSX.Element => (
    <Select
        label="Select an option"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" }
        ]}
    />
);

export const SelectWithError = (): JSX.Element => (
    <Select
        label="Select an option"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" }
        ]}
        error="This field is required."
    />
);
