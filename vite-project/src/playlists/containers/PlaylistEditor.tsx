import React, { useState, type ChangeEvent } from "react";
import AppButton from "../../common/components/AppButton";

type Props = {};

const playlistData = {
  id: 123,
  name: "Playlist 123",
  public: true,
  description: "Best playlist",
};

const PlaylistEditor = (props: Props) => {
  const [playlist, setPlaylist] = useState(playlistData);

  const handler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const playlistCopy = { ...playlist };
    // const playlistCopy = playlist;
    playlistCopy.name = event.target.value;
    setPlaylist(playlistCopy);
  };

  return (
    <div>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" value={playlist.name} onChange={handler} />

          <div className="text-end">{playlist.name.length} / 100</div>
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" defaultChecked={playlist.public} />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Description</label>
          <textarea defaultValue={playlist.description}></textarea>
        </div>

        <div className="flex justify-between">
          <AppButton>Save</AppButton>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
