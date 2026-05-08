import Image from "next/image";
import Favorite from "@/assets/favorite.svg";
import Link from "next/link";
import ColorPalette from "../ColorPalette";
import CommentsForm from "../CommentsForm";
import styled from "styled-components";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 16px;
  margin: -8px -16px;
  border-radius: 4px;
`;

const FavortiteIcon = styled.span`
  position: absolute;
  align-self: center;
`;

const ColorWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
`;

const FormWrapper = styled.section`
  border-top: solid 1px #dddddd;
`;
export default function ArtPieceCard({ foundArtPiece }) {
  const { slug, imageSource, name, artist, colors, genre, year } =
    foundArtPiece;

  return (
    <>
      <span>
        <Link href="/art-pieces">Go Back to Overview</Link>
      </span>
      <CardWrapper>
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

        <FavortiteIcon>
          <Favorite />
        </FavortiteIcon>
        <ColorWrapper>
          <ColorPalette colors={colors} />
        </ColorWrapper>
        <h2>
          {artist}: „{name}“<em>{year}</em>
        </h2>
        <h3>{genre}</h3>
      </CardWrapper>
      <FormWrapper>
        <CommentsForm />
      </FormWrapper>
    </>
  );
}
