import NavBar from "@/components/NavBar";



import ArtPieceCard from "@/components/ArtPieceCard";
import { useRouter } from "next/router";
import { GetArtPiecesData } from "@/libs/artPieces";
import Head from "next/head";

export default function ArtPiecesDetail({ artPieces, setArtPieces }) {
  const router = useRouter();
  const { slug } = router?.query;
  const foundArtPiece = artPieces.find((artPiece) => artPiece.slug === slug);
  return (
    <>
      <Head>
        <title>{foundArtPiece.name}</title>
      </Head>
      <h1>Art Piece Detail Page</h1>
      <ArtPieceCard
        artPieces={artPieces}
        foundArtPiece={foundArtPiece}
        setArtPieces={setArtPieces}
      />
           <NavBar />
    </>
  );
}
