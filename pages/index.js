import Head from "next/head";
import { GetRandomArtPiece } from "@/libs/artPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ artPieces, setArtPieces }) {
  return (
    <>
      <Head>
        <title>Spotlight</title>
      </Head>
      <h1>Art Gallery</h1>
      <Spotlight
        artPieces={artPieces}
        artPiece={GetRandomArtPiece(artPieces)}
        setArtPieces={setArtPieces}
      />
    </>
  );
}
