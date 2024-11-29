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

  const playlists = mockPlaylists;
  const [selectedId, setSelectedId] = useState<Playlist["id"]>();

  const [selected, setSelected] = useState(playlists[0]);
  const selectById = (id: Playlist["id"]) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id)!);
  };

  const savePlaylist = (draft: Playlist) => {
    console.log("Saving", draft);
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
          {mode === "details" && <PlaylistDetails />}
          {mode === "editor" && <PlaylistEditor />}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
