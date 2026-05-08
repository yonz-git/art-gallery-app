import Head from "next/head";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { GetArtPiecesData, GetRandomArtPiece } from "@/libs/artPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  const { artPieces, error, isLoading } = GetArtPiecesData();

  if (error) {
    console.error("ERROR!", error.info);
    return <div>failed to load</div>;
  }

  if (isLoading || !artPieces) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>Spotlight</title>
      </Head>
      <h1>Art Gallery</h1>
      <Spotlight artPiece={GetRandomArtPiece(artPieces)} />
  <NavBar />
    </>
  );
}
