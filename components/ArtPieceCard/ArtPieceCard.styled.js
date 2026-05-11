import styled from "styled-components";

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 16px;
  margin: -8px -16px;
  border-radius: 4px;
`;

export const ColorWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
`;

export const FormWrapper = styled.section`
  border-top: solid 1px #dddddd;
  margin-bottom: 75px;
`;
