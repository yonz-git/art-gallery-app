export function GetRandomArtPiece(artPieces) {
  const randomNumber = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomNumber];
}

export function ToggleFavorite(artPieces, artPiece) {
  return artPieces.map((art) =>
    art.slug === artPiece.slug
      ? { ...art, isFavorite: art.isFavorite ? false : true }
      : art
  );
}
