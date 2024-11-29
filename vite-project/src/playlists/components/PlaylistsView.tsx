import React, { useState } from "react";
import PlaylistList from "../containers/PlaylistList";
import PlaylistDetails from "../containers/PlaylistDetails";
import PlaylistEditor from "../containers/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../containers/mockPlaylists";
import type { Playlist } from "../containers/Playlist";

type Props = {};
type Mode = "details" | "editor";

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<Mode>("details");

  const [playlists, setPlaylists] = useState(
    // mockPlaylists as (Playlist | undefined | string)[]
    mockPlaylists
  );

  const [selectedId, setSelectedId] = useState<Playlist["id"]>("123");
  const [selected, setSelected] = useState(playlists[0]);

  const selectById = (id: Playlist["id"]) => {
    setSelectedId(id);

    // const found = playlists.find((p) => p.id === id) as any
    // const found = playlists.find((p) => p.id === id) as Playlist
    // const found = {} as Playlist
    // const found = 123 as unknown as Playlist
    // const found = playlists.find((p) => p.id === id)!

    const found = playlists.find((p) => p.id === id);

    if (typeof found === "object") {
      found; // Playlist
    } else if (found === undefined) {
      found; // undefined
    } else {
      found; // never
      // const _never: never = found;
      // Exhaustiveness check 
      found satisfies never;
      throw new Error("Invalid server response");
    }
  };

  const savePlaylist = (draft: Playlist) => {
    // setMode("details");
    // setSelected(draft);

    // // Mutable
    // const index = playlists.findIndex((p) => p.id === draft.id);
    // playlists[index] = draft;
    // setPlaylists([...playlists]); // Defensive copy

    // Immutable
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));
  };

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 my-5">
        <div>
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectById}
          />
          {/* <input type="text" placki={selected.name} /> */}
        </div>
        <div>
          {selected.name}
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}
          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={showDetails}
              onSave={savePlaylist}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
