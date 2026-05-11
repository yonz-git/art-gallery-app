import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import { ToggleFavorite } from "@/libs/artPieces";
import { StyledImage } from "./ArtPiecePreview.styled";

export default function ArtPiecePreview({ artPieces, artPiece, setArtPieces }) {
  const { imageSource, name, slug, artist } = artPiece;

  return (
    <section aria-label="Art Piece Section">
      <Link href={`/art-pieces/${slug}`}>
        <StyledImage src={imageSource} alt={name} width={300} height={150} />;
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
