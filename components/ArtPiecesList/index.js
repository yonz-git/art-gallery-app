import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPiecesList() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) {
    console.error("ERROR!", error.info);

    return <div>failed to load</div>;
  }

  if (isLoading || !artPieces) return <div>loading...</div>;
  console.dir(artPieces);
  return (
    <ul>
      {artPieces.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPiecePreview
            src={artPiece.imageSource}
            name={artPiece.name}
            artist={artPiece.artist}
            slug={artPiece.slug}
          />
        </li>
      ))}
    </ul>
  );
}
