import ky, { Options } from "ky";
import { mockAlbums } from "../fixtures/mockAlbums";
import { getToken } from "./Auth";
import {
  AlbumResponse,
  AlbumSearchResponse,
  PagingObject,
} from "../model/Album";
import { Playlist } from "../model/Playlist";

export const MusicAPI = ky.create({
  prefixUrl: "https://api.spotify.com/v1/",
  // headers: {
  //   Authorization: `Bearer ${getToken()}`,
  // },
  hooks: {
    beforeRequest: [
      (req) => {
        req.headers.append("Authorization", `Bearer ${getToken()}`);
        return req;
      },
    ],
    beforeError: [
      (error) => {
        return error.response.json().then((res: any) => {
          error.message = (res as SpotifyError).error.message;
          return error;
        });
      },
    ],
  },
});

export const fetchAlbumSearchResults = (query = "", init?: Options) => {
  return MusicAPI.get("search", {
    searchParams: {
      type: "album",
      query: query,
    },
    ...init,
  })
    .json<AlbumSearchResponse>()
    .then((res) => res.albums.items);
};

export const fetchMyPlaylists = (init?: Options) => {
  return MusicAPI.get("me/playlists")
    .json<PagingObject<Playlist>>()
    .then((d) => d.items);
};

export const fetchAlbumById = (id: string, init?: Options) => {
  return MusicAPI.get("albums/" + id).json<AlbumResponse>();
};

export const fetchPlaylistById = (id: string, init?: Options) => {
  return MusicAPI.get("playlists/" + id).json<AlbumResponse>();
};

export interface SpotifyError {
  error: {
    status: number;
    message: string;
  };
}

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
