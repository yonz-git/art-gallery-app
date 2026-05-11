import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #0a0a0b;
  border-top: 1px solid #0a0a0b;
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  flex: 1;
  display: flex;
  border-right: 1px solid #0a0a0b;
  pointer: cursor;

  &.active {
    background-color: #1f2023;
    font-weight: bold;
  }

  &:hover {
    background-color: #1f2023;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
  }
`;
