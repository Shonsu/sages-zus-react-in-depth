import { useState, useEffect } from "react";
import { Album } from "../../common/model/Album";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";

export function useFetchAlbums(query: string) {
  const [data = [], setData] = useState<Album[] | undefined>([]);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const huston = new AbortController();

    setIsLoading(true);
    setError(undefined);
    setData(undefined);

    fetchAlbumSearchResults(query, { signal: huston.signal })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

    return () => huston.abort("Cancel");
  }, [query]);

  return {
    data,
    isLoading,
    error,
  };
}
