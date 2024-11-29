import React, { useState } from "react";
import PlaylistList from "../containers/PlaylistList";
import PlaylistDetails from "../containers/PlaylistDetails";
import PlaylistEditor from "../containers/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../containers/mockPlaylists";
import type { Playlist } from "../containers/Playlist";

type Props = {};
type Mode = "details" | "editor" | "creator";

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<Mode>("details");

  const [playlists, setPlaylists] = useState(mockPlaylists);

  const [selectedId, setSelectedId] = useState<Playlist["id"]>("123");
  const [selected, setSelected] = useState<Playlist>();

  const selectById = (id: Playlist["id"]) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id));
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID()
    
  };

  const savePlaylist = (draft: Playlist) => {
    setMode("details");
    setSelected(draft);

    // // Mutable
    // const index = playlists.findIndex((p) => p.id === draft.id);
    // playlists[index] = draft;
    // setPlaylists([...playlists]); // Defensive copy

    // Immutable
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));
  };

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");
  const showCreator = () => setMode("creator");

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 my-5">
        <div className="grid gap-4 align-bottom">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectById}
          />

          <div className="">
            <Button onClick={showCreator}>Create new</Button>
          </div>
        </div>
        <div>
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
          {mode === "creator" && (
            <PlaylistEditor onCancel={showDetails} onSave={createPlaylist} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
