import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (resource, init) => {
  const result = await fetch(resource, init);

  if (!result.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await result.json();
    error.status = result.status;
    throw error;
  }

  return result.json();
};

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useLocalStorageState("artPieces", {
    defaultValue: [],
  });
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  useEffect(() => {
    if (artPieces.length === 0) {
      if (data) {
        setArtPieces(data);
      }
    }
  }, [data]);

  if (error) {
    console.error("ERROR!", error.info);
    return (
      <div>
        <p>{error.message}</p>
        <p>Status: {error.status}</p>
      </div>
    );
  }

  if (isLoading || !artPieces || artPieces.length === 0)
    return (
      <div>
        <p>loading...</p>
      </div>
    );

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          artPieces={artPieces}
          setArtPieces={setArtPieces}
        />
      </SWRConfig>
    </>
  );
}
