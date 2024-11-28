// tsrafce

import React from "react";

type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: 123,
    name: "Playlist 123",
    public: true,
    description: "Best playlist",
  };

  return (
    <div>
      {true} {false} {null} {undefined}
      {/* .grid.gap-5>.grid.gap-2*3>strong{Name}+div{Playlist $$$} */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <strong>Name</strong>
          <div>Playlist 001</div>
        </div>

        <div className="grid gap-2">
          <strong>Public</strong>
          <div style={{ color: "red" }}>Yes</div>
        </div>

        <div className="grid gap-2">
          <strong>Description</strong>
          <div>Awesome Playlist</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
