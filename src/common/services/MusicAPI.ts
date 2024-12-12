import { mockAlbums } from "../fixtures/mockAlbums";

export const fetchAlbumSearchResults = (query = "") => {
  console.log("searching " + query);

  return Promise.resolve(mockAlbums);
};
