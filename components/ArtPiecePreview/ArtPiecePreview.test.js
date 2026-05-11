import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecePreview from ".";

jest.mock("../FavoriteButton", () => {
  return function MockFavoriteButton({ onToggleFavorite }) {
    return <button onClick={onToggleFavorite}>Favorite</button>;
  };
});

const mockArtPiece = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  name: "Orange Red and Green",
  artist: "Steve Johnson",
  isFavorite: false,
};

// 3. THE SPY: A memory-function to watch the button click
const mockSetArtPieces = jest.fn();

test("renders the image, title, and artist", () => {
  render(
    <ArtPiecePreview
      artPiece={mockArtPiece}
      artPieces={[mockArtPiece]}
      setArtPieces={mockSetArtPieces}
    />
  );

  // Check for Image
  const image = screen.getByAltText(mockArtPiece.name);
  expect(image).toBeInTheDocument();

  // Check for Title and Artist
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toHaveTextContent(mockArtPiece.name);
  expect(heading).toHaveTextContent(mockArtPiece.artist);
});

test("renders a link to the detail page", () => {
  render(
    <ArtPiecePreview
      artPiece={mockArtPiece}
      artPieces={[mockArtPiece]}
      setArtPieces={mockSetArtPieces}
    />
  );

  // The link should use the slug from our mock data
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", `/art-pieces/${mockArtPiece.slug}`);
});

test("triggers setArtPieces when FavoriteButton is clicked", async () => {
  const user = userEvent.setup();

  render(
    <ArtPiecePreview
      artPiece={mockArtPiece}
      artPieces={[mockArtPiece]}
      setArtPieces={mockSetArtPieces}
    />
  );

  const button = screen.getByRole("button", { name: /favorite/i });

  // THE ACTION: We await the process
  await user.click(button);

  // THE VERIFICATION: We check the spy's memory
  expect(mockSetArtPieces).toHaveBeenCalledTimes(1);
});
