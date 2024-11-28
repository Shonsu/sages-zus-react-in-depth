import React from "react";
import AppButton from "../../common/components/AppButton";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: 123,
    name: "Playlist 123",
    public: true,
    description: "Best playlist",
  };

  const handleChange = () => {}

  return (
    <div>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" defaultValue={playlist.name} onChange={handleChange} />
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
