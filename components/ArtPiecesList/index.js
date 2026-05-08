import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPiecesList({ artPieces, setArtPieces }) {
  return (
    <ul>
      {artPieces.map((artPiece) => (
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
