import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

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

  &.active {
    background-color: #ccf2ad;
  }

  &:hover {
    background-color: #ccf2ad59;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
  }
`;

export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNav>
      <NavList>
        <NavItem className={router.pathname === "/" ? "active" : ""}>
          <Link href="/">Spotlight</Link>
        </NavItem>
        <NavItem
          className={router?.pathname.includes("/art-pieces") ? "active" : ""}
        >
          <Link href="/art-pieces">Art Pieces</Link>
        </NavItem>
        <NavItem className={router.pathname === "/favorite" ? "active" : ""}>
          <Link href="/favorite">Favorites</Link>
        </NavItem>
      </NavList>
    </StyledNav>
  );
}
