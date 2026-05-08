import ArtPiecePreview from "@/components/ArtPiecePreview";
import { GetArtPiecesData } from "@/libs/artPieces";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
`;
const ListWrapper = styled.ul`
  margin-bottom: 60px;
`;
export default function ArtPiecesList() {
  const { artPieces, error, isLoading } = GetArtPiecesData();
  if (error) {
    console.error("ERROR!", error.info);

    return <div>failed to load</div>;
  }

  if (isLoading || !artPieces) return <div>loading...</div>;
  console.dir(artPieces);
  return (
    <ListWrapper>
      {artPieces.map((artPiece) => (
        <ListItem key={artPiece.slug}>
          <ArtPiecePreview artPiece={artPiece} />
        </ListItem>
      ))}
    </ListWrapper>
  );
}
