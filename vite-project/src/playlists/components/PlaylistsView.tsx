import React, { useState } from "react";
import PlaylistList from "../containers/PlaylistList";
import PlaylistDetails from "../containers/PlaylistDetails";
import PlaylistEditor from "../containers/PlaylistEditor";
import { Button } from "primereact/button";
import { mockPlaylists } from "../containers/mockPlaylists";

type Props = {};
type Mode = "details" | "editor";

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<Mode>("details");

  const playlists = mockPlaylists;
  const selected = playlists[0];

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 my-5">
        <div>
          <PlaylistList />
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
