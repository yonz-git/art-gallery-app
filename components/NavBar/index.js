import Link from "next/link";
import { useRouter } from "next/router";
import { StyledNav, NavList, NavItem } from "./NavBar.styled";

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
        <NavItem className={router.pathname === "/favorites" ? "active" : ""}>
          <Link href="/favorites">Favorites</Link>
        </NavItem>
      </NavList>
    </StyledNav>
  );
}
