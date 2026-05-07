import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  border-top: 1px solid #333;
`;

const NavList = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  flex: 1;
  display: flex;
  border-right: 1px solid #333;

  &:last-child {
    border-right: none;
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem>
          <Link href="/">Spotlight</Link>
        </NavItem>
        <NavItem>
          <Link href="/art-pieces">Art Pieces</Link>
        </NavItem>
        <NavItem>
          <Link href="/favorite">Favorites</Link>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default NavBar;
