import ArtPiecePreview from "@/components/ArtPiecePreview";
import { GetArtPiecesData } from "@/libs/artPieces";

export default function FavoritesList() {
  const { artPieces, error, isLoading } = GetArtPiecesData();
  if (error) {
    console.error("ERROR!", error.info);

    return <div>failed to load</div>;
  }

  if (isLoading || !artPieces) return <div>loading...</div>;
  console.dir(artPieces);

  const favoritePieces = artPieces.filter((artPiece) => {
    const info = artPieces?.find((item) => item.slug === artPiece.slug);

    return info?.isFavorite;
  });

  return (
    <ul>
      {favoritePieces?.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPiecePreview artPiece={artPiece} />
        </li>
      ))}
    </ul>
  );
}
