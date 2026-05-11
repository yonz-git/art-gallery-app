import styled from "styled-components";

export const ColorCircle = styled.div`
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
