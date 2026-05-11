import ArtPiecePreview from "@/components/ArtPiecePreview";
import { ListItem, ListWrapper } from "./ArtPiecesList.styled";

export default function ArtPiecesList({ artPieces, setArtPieces }) {
  return (
    <ListWrapper>
      {artPieces.map((artPiece) => (
        <ListItem key={artPiece.slug}>
          <ArtPiecePreview
            artPieces={artPieces}
            artPiece={artPiece}
            setArtPieces={setArtPieces}
          />
        </ListItem>
      ))}
    </ListWrapper>
  );
}
