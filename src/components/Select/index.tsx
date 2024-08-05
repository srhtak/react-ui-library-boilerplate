// src/components/Select/index.tsx
import React from "react";
import { type SelectProps } from "./types";
import { SelectContainer, StyledSelect, ErrorMessage } from "./styled";

const Select: React.FC<SelectProps> = ({ label, options, error, ...rest }) => {
  return (
    <SelectContainer>
      {(label != null) && <label>{label}</label>}
      <StyledSelect hasError={!(error == null)} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {(error != null) && <ErrorMessage>{error}</ErrorMessage>}
    </SelectContainer>
  );
};

export default Select;
