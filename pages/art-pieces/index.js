import ArtPiecesList from "@/components/ArtPiecesList";
import Head from "next/head";

export default function ArtPieces({ artPieces, setArtPieces }) {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <h1>Art Gallery</h1>
      <ArtPiecesList artPieces={artPieces} setArtPieces={setArtPieces} />
    </>
  );
}
