import ArtPieceCard from "@/components/ArtPieceCard";
import { useRouter } from "next/router";
import { GetArtPiecesData } from "@/libs/artPieces";

export default function ArtPiecesDetail() {
  const { artPieces, error, isLoading } = GetArtPiecesData();
  const router = useRouter();
  const { slug } = router.query;
  if (error) {
    console.error("ERROR!", error.info);

    return <div>failed to load</div>;
  }

  if (isLoading || !artPieces) return <div>loading...</div>;
  const foundArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);
  console.log(foundArtPiece);
  return (
    <>
      <h1>Art Piece Detail Page</h1>
      <ArtPieceCard foundArtPiece={foundArtPiece} />
    </>
  );
}
