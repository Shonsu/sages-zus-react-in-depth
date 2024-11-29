import React from "react";
import PlaylistList from "../containers/PlaylistList";
import PlaylistDetails from "../containers/PlaylistDetails";
import PlaylistEditor from "../containers/PlaylistEditor";
import { Button } from "primereact/button";

type Props = {};

const PlaylistsView = (props: Props) => {
  const moode = "details";
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistList />
        </div>
        <div>
          <PlaylistDetails />
          <PlaylistEditor />
          
          <Button>Edit</Button>
          <Button>DEtails</Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
