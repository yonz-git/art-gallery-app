import ArtPieceCard from "@/components/ArtPieceCard";
import { useRouter } from "next/router";

export default function ArtPiecesDetail({ artPieces, setArtPieces }) {
  const router = useRouter();
  const { slug } = router?.query;
  const foundArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);

  return (
    <>
      <h1>Art Piece Detail Page</h1>
      <ArtPieceCard
        artPieces={artPieces}
        foundArtPiece={foundArtPiece}
        setArtPieces={setArtPieces}
      />
    </>
  );
}
