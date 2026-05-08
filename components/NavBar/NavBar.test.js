import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import NavBar from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders the navigation links", () => {
  useRouter.mockReturnValue({
    pathname: "/",
    push: jest.fn(),
    asPath: "/",
  });

  render(<NavBar />);

  const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
  const artPiecesLink = screen.getByRole("link", { name: "Art Pieces" });
  const favoritesLink = screen.getByRole("link", { name: "Favorites" });

  expect(spotlightLink).toBeInTheDocument();
  expect(artPiecesLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
});

test("renders Spotlight as active when on that page", () => {
  useRouter.mockReturnValue({
    pathname: "/",
  });

  render(<NavBar />);

  const spotlightItem = screen.getByText("Spotlight").closest("li");
  expect(spotlightItem).toHaveClass("active");
});

test("renders Art Pieces as active when on that page", () => {
  useRouter.mockReturnValue({
    pathname: "/art-pieces",
  });

  render(<NavBar />);

  const artPiecesItem = screen.getByText("Art Pieces").closest("li");
  expect(artPiecesItem).toHaveClass("active");
});

test("renders Favorites as active when on that page", () => {
  useRouter.mockReturnValue({
    pathname: "/favorites",
  });

  render(<NavBar />);

  const FavoritesItem = screen.getByText("Favorites").closest("li");
  expect(FavoritesItem).toHaveClass("active");
});
