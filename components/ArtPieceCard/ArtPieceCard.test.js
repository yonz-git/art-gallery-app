import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPieceCard from ".";

// Mocking child components that we aren't testing right now
// This keeps the test focused only on ArtPieceCard
jest.mock("../ColorPalette", () => () => <div data-testid="color-palette" />);
jest.mock("../CommentsForm", () => () => <div data-testid="comments-form" />);

jest.mock("../FavoriteButton", () => {
  return function MockFavoriteButton({ onToggleFavorite }) {
    return (
      <button onClick={onToggleFavorite} aria-label="favorite-button">
        Favorite
      </button>
    );
  };
});

const mockArtPiece = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  name: "Orange Red and Green Abstract Painting",
  artist: "Steve Johnson",
  colors: ["#0f5855", "#e6ba15"],
  genre: "Abstract Painting",
  year: "2018",
  isFavorite: false,
};

const mockSetArtPieces = jest.fn();

test("renders art piece details: image, title, artist, year and genre", () => {
  render(
    <ArtPieceCard
      foundArtPiece={mockArtPiece}
      artPieces={[mockArtPiece]}
      setArtPieces={mockSetArtPieces}
    />
  );

  // Check for the Image (via alt text)
  const image = screen.getByAltText(mockArtPiece.name);
  expect(image).toBeInTheDocument();

  // Check for Artist and Name (in the <h2>)
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toHaveTextContent(mockArtPiece.artist);
  expect(heading).toHaveTextContent(mockArtPiece.name);

  // Check for the Year
  const year = screen.getByText(mockArtPiece.year);
  expect(year).toBeInTheDocument();

  // Check for the Genre
  const genre = screen.getByRole("heading", { level: 3 });
  expect(genre).toHaveTextContent(mockArtPiece.genre);
});

test("renders a back link to the overview", () => {
  render(
    <ArtPieceCard
      foundArtPiece={mockArtPiece}
      artPieces={[mockArtPiece]}
      setArtPieces={mockSetArtPieces}
    />
  );

  const backLink = screen.getByRole("link", { name: /go back to overview/i });
  expect(backLink).toBeInTheDocument();
  expect(backLink).toHaveAttribute("href", "/art-pieces");
});

test("calls setArtPieces when the favorite button is clicked", async () => {
  const user = userEvent.setup();

  render(
    <ArtPieceCard
      foundArtPiece={mockArtPiece}
      artPieces={[mockArtPiece]}
      setArtPieces={mockSetArtPieces}
    />
  );

  const favoriteButton = screen.getByRole("button");
  await user.click(favoriteButton);

  expect(mockSetArtPieces).toHaveBeenCalledTimes(1);
});
