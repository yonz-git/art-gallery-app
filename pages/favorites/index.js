import FavoritesList from "@/components/FavoritesList";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <h1>Art Gallery</h1>
      <FavoritesList />
      <NavBar />
    </>
  );
}
