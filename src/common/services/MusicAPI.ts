import ky, { Options } from "ky";
import { mockAlbums } from "../fixtures/mockAlbums";
import { getToken } from "./Auth";
import { AlbumSearchResponse } from "../model/Album";

export const fetchAlbumSearchResults = (query = "", init?: Options) => {
  ky.get("https://api.spotify.com/v1/search", {
    searchParams: {
      type: "album",
      query: query,
    },
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    ...init,
  })
    .json<AlbumSearchResponse>()
    .catch((e) => Promise.reject(new Error(e.error.message)))
    .then((res) => res.albums.items);
};


export const fetchAlbumSearchResults2 = (query = "", init?: RequestInit) => {
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
      ...init,
    }
  )
    .then((res) =>
      res.ok
        ? res.json()
        : res.json().then((e) => Promise.reject(new Error(e.error.message)))
    )
    .then((res) => res.albums.items);
};

// export const fetchAlbumSearchResults = (query = "") => {
//   console.log("searching " + query);
//   return Promise.resolve(mockAlbums);
// }
