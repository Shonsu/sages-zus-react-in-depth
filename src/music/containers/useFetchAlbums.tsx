import { useState, useEffect } from "react";
import { Album } from "../../common/model/Album";
import {
  fetchAlbumById,
  fetchAlbumSearchResults,
} from "../../common/services/MusicAPI";
import { Options } from "ky";

export function useFetch<T, P>(
  param: P,
  fetcher: (query: P, init?: Options) => Promise<T>
) {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!param) return;
    const huston = new AbortController();

    setIsLoading(true);
    setError(undefined);
    setData(undefined);

    // fetchAlbumSearchResults(query, { signal: huston.signal })
    fetcher(param, { signal: huston.signal })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

    return () => huston.abort("Cancel");
  }, [param]);

  return {
    data,
    isLoading,
    error,
  };
}

export function useFetchAlbums(query: string) {
  return useFetch(query, fetchAlbumSearchResults);
}

export function useFetchAlbum(id: string) {
  return useFetch(id, fetchAlbumById);
}

export function useFetchAlbums2(query: string) {
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
