import Image from "next/image";
import Favorite from "@/assets/favorite.svg";
import Link from "next/link";
import ColorPalette from "../ColorPalette";

export default function ArtPieceCard({ foundArtPiece }) {
  const { slug, imageSource, name, artist, colors, genre, year } =
    foundArtPiece;
  console.log(foundArtPiece);
  return (
    <>
      <span>
        <Link href="/art-pieces">Go Back to Overview</Link>
      </span>
      <section>
        <Link href={`/art-pieces/${slug}`}>
          {" "}
          <Image
            src={imageSource}
            alt={name}
            width="300"
            height="150"
            style={{
              objectFit: "cover",
            }}
          />
        </Link>

        <span>
          <Favorite />
        </span>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            gap: "1em",
          }}
        >
          {" "}
          <ColorPalette colors={colors} />
        </ul>
        <h2>
          {artist}: „{name}“<em>{year}</em>
        </h2>
        <h3>{genre}</h3>
      </section>
    </>
  );
}
