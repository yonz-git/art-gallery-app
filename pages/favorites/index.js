import FavoritesList from "@/components/FavoritesList";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Favorites({ artPieces, setArtPieces }) {
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <h1>Favorites</h1>
      <FavoritesList artPieces={artPieces} setArtPieces={setArtPieces} />
      <NavBar />
    </>
  );
}
