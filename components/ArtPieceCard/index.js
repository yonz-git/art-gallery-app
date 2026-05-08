import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";

export default function ArtPieceCard({
  artPieces,
  foundArtPiece,
  setArtPieces,
}) {
  const { slug, imageSource, name, artist, colors, genre, year } =
    foundArtPiece;
  return (
    <>
      <span>
        <Link href="/art-pieces">Go Back to Overview</Link>
      </span>
      <section>
        <Link href={`/art-pieces/${slug}`}>
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

        <FavoriteButton
          onToggleFavorite={() =>
            setArtPieces(ToggleFavorite(artPieces, foundArtPiece))
          }
          isFavorite={foundArtPiece.isFavorite}
        />
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
          {artist}: "{name}“ <em>{year}</em>
        </h2>
        <h3>{genre}</h3>
      </section>
    </>
  );
}
