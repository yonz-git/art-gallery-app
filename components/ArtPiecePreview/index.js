import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";

export default function ArtPiecePreview({ artPieces, artPiece, setArtPieces }) {
  const { imageSource, name, slug, artist } = artPiece;

  return (
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
          setArtPieces(ToggleFavorite(artPieces, artPiece))
        }
        isFavorite={artPiece.isFavorite}
      />
      <h2>
        &quot;{name}&quot; by {artist}
      </h2>
    </section>
  );
}
