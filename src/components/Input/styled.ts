import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ hasError }) => (hasError ?? false ? "red" : "#ccc")};
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;
