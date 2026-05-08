import ArtPiecePreview from "@/components/ArtPiecePreview";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
`;
const ListWrapper = styled.ul`
  margin-bottom: 60px;
`;
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
