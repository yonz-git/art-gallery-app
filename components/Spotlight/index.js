import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import {} from "./Spotlight.styled";
import { ImageWrap } from "../ArtPiecePreview/ArtPiecePreview.styled";

export default function Spotlight({ artPieces, artPiece, setArtPieces }) {
  return (
    <>
      <ImageWrap>
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
      </ImageWrap>
      <h2>{artPiece.artist}</h2>
    </>
  );
}
