import React, { useEffect, useState } from "react";
import PlaylistList from "../containers/PlaylistList";
import PlaylistDetails from "../containers/PlaylistDetails";
import PlaylistEditor from "../containers/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../containers/mockPlaylists";
import type { Playlist } from "../containers/Playlist";
import { appendItem, updateItem } from "../../common/fp-utils";

type Props = {};
type Mode = "details" | "editor" | "creator";

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<Mode>("details");

  const [playlists, setPlaylists] = useState(mockPlaylists);

  const [selectedId, setSelectedId] = useState<Playlist["id"]>("");
  const [selected, setSelected] = useState<Playlist>();

  const selectById = (id: Playlist["id"]) => {
    setSelectedId(id);
    showDetails();
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    setPlaylists(appendItem(draft));
    setSelectedId(draft.id);
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists(updateItem(draft));
    setMode("details");
  };

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");
  const showCreator = () => {
    setMode("creator");
    setSelectedId("");
  };

  // Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // setSelected(playlists.find((p) => p.id === selectedId));

  useEffect(() => {
    console.log("render effect");
  });

  useEffect(() => {
    console.log("render effect + deps "); // y = 2x + b
    setSelected(playlists.find((p) => p.id === selectedId));
  }, [selectedId, playlists]);

  useEffect(() => {
    console.log("effect only once");
  },[/* 'placki' */]);

  console.log("render");

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
