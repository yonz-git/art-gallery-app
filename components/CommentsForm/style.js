import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 32px;
`;
export const Label = styled.label`
  font-size: 0.8rem;
`;
export const InputField = styled.input`
  padding-inline: 20px;
  padding-block: 10px;
  font: inherit;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid lightgray;
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: #f5f5f5;
  border: 1px solid #333;
  border-radius: 4px;
  min-height: 2rem;
  color: black;
  &.active {
    background-color: #ccf2ad;
  }

  &:hover {
    background-color: #ccf2ad59;
  }
`;
