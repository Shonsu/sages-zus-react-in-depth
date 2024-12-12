import type { Playlist } from "../model/Playlist";

interface PlaylistTracks extends Playlist {
  // name: number // error!
  tracks?: any[];
}

type PlaylistWithTracks = Playlist & {
  tracks?: any[];
  // name: number; // string & string = never
};

export const mockPlaylists: Playlist[] = [
  {
    id: '123',
    name: "Playlist 123",
    public: true,
    description: "Awesome playlist",
  },
  {
    id: '234',
    name: "Playlist 234",
    public: false,
    description: "Best playlist",
  },
  {
    id: '345',
    name: "Playlist 345",
    public: true,
    description: "Cool playlist",
  },
];
