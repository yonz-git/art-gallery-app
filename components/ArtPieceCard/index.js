import Image from "next/image";
import Favourite from "@/assets/favourite.svg";
import Link from "next/link";

export default function ArtPieceCard({ foundArtPiece }) {
  const { slug, imageSource, name, artist, colors } = foundArtPiece;
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
          <Favourite />
        </span>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            gap: "1em",
          }}
        >
          {colors.map((color) => (
            <li key={color}>
              <div
                style={{
                  backgroundColor: color,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              ></div>
            </li>
          ))}
        </ul>
        <h2>
          {artist}: „{name}“
        </h2>
      </section>
    </>
  );
}
