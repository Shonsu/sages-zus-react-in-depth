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
  const selected = playlists[0];
  const [selectedId, setSelectedId] = useState<Playlist["id"]>();

  const selectById = (id: Playlist["id"]) => {
    setSelectedId(id);
  };

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
          {mode === "details" && <PlaylistDetails />}
          {mode === "editor" && <PlaylistEditor />}

          <Button onClick={() => setMode("editor")}>Edit</Button>
          <Button onClick={() => setMode("details")}>DEtails</Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
