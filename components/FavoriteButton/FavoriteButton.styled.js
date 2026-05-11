import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 1em;
  right: 1em;

  pointer-events: ${(props) => (props.$isDisabled ? "none" : "all")};

  & svg {
    fill: ${(props) => (props.$isFavorite ? "red" : "#000")};
    & path {
      color: #fff;
    }
  }
  &:hover svg {
    fill: ${(props) => (props.$isFavorite ? "red" : "#fff")};

    & path {
      color: #000;
    }
  }
`;
