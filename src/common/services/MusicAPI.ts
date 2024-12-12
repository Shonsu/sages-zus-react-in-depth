import { mockAlbums } from "../fixtures/mockAlbums";
import { getToken } from "./Auth";

// export const fetchAlbumSearchResults = (query = "") => {
//   console.log("searching " + query);
//   return Promise.resolve(mockAlbums);
// }

export const fetchAlbumSearchResults = (query = "") => {
  const huston = new AbortController();

  return fetch(
    "https://api.spotify.com/v1/search?" +
      new URLSearchParams({
        type: "album",
        query: query,
      }),
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      signal: huston.signal,
    }
  )
    .then((res) =>
      res.ok
        ? res.json()
        : res.json().then((e) => Promise.reject(new Error(e.error.message)))
    )
    .then((res) => res.albums.items);
};

// Monadic Chain

// cz1 = [1, 2, 3]
//   .map((x) => x)
//   .map((x) => x)

// cz1.map((x) => x)
//   .forEach(console.log);
