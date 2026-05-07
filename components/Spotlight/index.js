import Link from "next/link";
import Image from "next/image";
import Favorite from "@/assets/favorite.svg";

export default function Spotlight({ artPiece }) {
  return (
    <>
      <Link href="/art-pieces">
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
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
      <h2>{artPiece.artist}</h2>
    </>
  );
}
