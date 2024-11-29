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
  // const [selected, setSelected] = useState<Playlist | undefined>(playlists[0]);
  // const [selected, setSelected] = useState<Playlist>(undefined);
  const [selected, setSelected] = useState<Playlist>();

  const selectById = (id: Playlist["id"]) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id))
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
          {mode === "details"  && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}
          {mode === "editor" && selected && (
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
