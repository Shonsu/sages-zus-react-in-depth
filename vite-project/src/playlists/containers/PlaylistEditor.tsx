import React, { useState, type ChangeEvent } from "react";
import AppButton from "../../common/components/AppButton";
import type { Playlist } from "./Playlist";

type Props = {
  playlist?: Playlist;
  onCancel: () => void;
  onSave: (draft: Playlist) => void;
};
const EMPTY_PLAYLIST = { id: "", name: "", public: false, description: "" };

const PlaylistEditor = ({
  onCancel,
  onSave,
  playlist: playlistData = EMPTY_PLAYLIST,
}: Props) => {
  const [playlist, setPlaylist] = useState(playlistData);

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylist({ ...playlist, name: event.target.value });
  };

  const submit = () => {
    onSave(playlist);
  };

  document.getElementById('playlist_name')?.focus()

  return (
    <div>
      <pre>{JSON.stringify(playlist, null, 2)}</pre>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input
            id="playlist_name"
            type="text"
            value={playlist.name}
            onChange={nameChange}
            name="name"
          />

          <div className="text-end">{playlist.name.length} / 100</div>
        </div>

        <div className="grid gap-2">
          <label>
            <input
              type="checkbox"
              checked={playlist.public}
              onChange={(e) =>
                setPlaylist({ ...playlist, public: e.target.checked })
              }
            />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Description</label>
          <textarea
            value={playlist.description}
            onChange={(e) =>
              setPlaylist({ ...playlist, description: e.target.value })
            }
          ></textarea>
        </div>

        <div className="flex justify-between">
          <AppButton onClick={onCancel}>Cancel</AppButton>
          <AppButton onClick={submit}>Save</AppButton>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
