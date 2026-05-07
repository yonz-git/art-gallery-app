import ArtPiecePreview from "@/components/ArtPiecePreview";
import { GetArtPiecesData } from "@/libs/artPieces";

export default function ArtPiecesList() {
  const { artPieces, error, isLoading } = GetArtPiecesData();
  if (error) {
    console.error("ERROR!", error.info);

    return <div>failed to load</div>;
  }

  if (isLoading || !artPieces) return <div>loading...</div>;
  console.dir(artPieces);
  return (
    <ul>
      {artPieces.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPiecePreview artPiece={artPiece} />
        </li>
      ))}
    </ul>
  );
}
