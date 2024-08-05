import React from "react";
import { type InputProps } from "./types";
import { InputContainer, StyledInput, ErrorMessage } from "./styled";

const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <InputContainer>
      {label !== null && label !== undefined && <label>{label}</label>}
      <StyledInput hasError={error !== null && error !== undefined} {...rest} />
      {error !== null && error !== undefined && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
