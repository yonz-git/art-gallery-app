import Image from "next/image";
import Link from "next/link";
import Favourite from "@/assets/favourite.svg";

export default function ArtPiecePreview({ artPiece }) {
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

      <span>
        <Favourite />
      </span>
      <h2>
        „{name}“ by {artist}
      </h2>
    </section>
  );
}
