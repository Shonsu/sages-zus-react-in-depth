import React, { useState } from "react";
import PlaylistList from "../containers/PlaylistList";
import PlaylistDetails from "../containers/PlaylistDetails";
import PlaylistEditor from "../containers/PlaylistEditor";
import { Button } from "primereact/button";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor">("details");

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
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
