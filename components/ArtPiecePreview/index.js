import Image from "next/image";
import Link from "next/link";
import Favourite from "@/public/assets/favourite.svg";

export default function ArtPiecePreview({ src, name, artist, slug }) {
  return (
    <section>
      <Link href={`/art-pieces/${slug}`}>
        {" "}
        <Image src={src} alt={name} width="300" height="150" />
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
