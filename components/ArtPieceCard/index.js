import Image from "next/image";
import Favourite from "@/assets/favourite.svg";
import Link from "next/link";
import { GetArtPiecesData } from "@/libs/artPieces";

export default function ArtPieceCard({ foundArtPiece }) {
  const { slug, imageSource, name, artist } = foundArtPiece;
  console.log(foundArtPiece);
  return (
    <>
      <span>
        <Link href="/art-pieces">Go Back to Overview</Link>
      </span>
      <section>
        <Link href={`/art-pieces/${slug}`}>
          {" "}
          <Image src={imageSource} alt={name} width="300" height="150" />
        </Link>

        <span>
          <Favourite />
        </span>
        <h2>
          „{name}“ by {artist}
        </h2>
      </section>
    </>
  );
}
