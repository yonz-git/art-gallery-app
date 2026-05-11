import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import ColorPalette from "../ColorPalette";
import CommentsForm from "../CommentsForm";
import { CardWrapper, ColorWrapper, FormWrapper } from "./ArtPieceCard.styled";

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
      <CardWrapper aria-label="Art Piece Section">
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

        <ColorWrapper aria-label="Colors Section">
          <ColorPalette colors={colors} />
        </ColorWrapper>
        <h2>
          {artist}: &quot;{name}&quot; <em>{year}</em>
        </h2>
        <h3>{genre}</h3>
      </CardWrapper>
      <FormWrapper aria-label="Form Section">
        <CommentsForm
          artPieces={artPieces}
          artPiece={foundArtPiece}
          setArtPieces={setArtPieces}
        />
      </FormWrapper>
    </>
  );
}
