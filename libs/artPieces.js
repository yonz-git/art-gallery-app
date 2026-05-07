import useSWR from "swr";

export function GetArtPiecesData() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  return { artPieces, error, isLoading };
}
