import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";

export default function Spotlight({ artPieces, artPiece, setArtPieces }) {
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
      <FavoriteButton
        onToggleFavorite={() =>
          setArtPieces(ToggleFavorite(artPieces, artPiece))
        }
        isFavorite={artPiece.isFavorite}
        disabled
      />
      <h2>{artPiece.artist}</h2>
    </>
  );
}
