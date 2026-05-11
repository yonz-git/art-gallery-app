import ArtPiecePreview from "@/components/ArtPiecePreview";
import {} from "./FavoriteList.styled";

export default function FavoritesList({ artPieces, setArtPieces }) {
  const favoritePieces = artPieces.filter((artPiece) => {
    const info = artPieces?.find((item) => item.slug === artPiece.slug);

    return info?.isFavorite;
  });

  return (
    <ul>
      {favoritePieces?.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPiecePreview
            artPieces={artPieces}
            artPiece={artPiece}
            setArtPieces={setArtPieces}
          />
        </li>
      ))}
    </ul>
  );
}
