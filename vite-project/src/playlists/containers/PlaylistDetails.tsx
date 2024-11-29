// tsrafce

import React from "react";

type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: '123',
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
          <div>{playlist.name}</div>
        </div>

        <div className="grid gap-2">
          <strong>Public</strong>

          <div style={{ color: playlist.public ? "red" : "green" }}>
            {playlist.public ? "Yes" : <span>No</span>}
          </div>
        </div>

        <div className="grid gap-2">
          <strong>Description</strong>
          <div>{playlist.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
