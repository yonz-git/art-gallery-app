import ArtPiecesList from "@/components/ArtPiecesList";
import Head from "next/head";

export default function ArtPieces() {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <h1>Art Gallery</h1>
      <ArtPiecesList />
    </>
  );
}
