import React, { useEffect, useId, useState, type ChangeEvent } from "react";
import AppButton from "../../common/components/AppButton";
import type { Playlist } from "../../common/model/Playlist";
import { useFocus } from "../../common/hooks/useFocus";

type Props = {
  playlist?: Playlist;
  onCancel: () => void;
  onSave: (draft: Playlist) => void;
};
const EMPTY_PLAYLIST = { id: "", name: "", public: false, description: "" };

const PlaylistEditor = ({
  onCancel,
  onSave,
  playlist: playlistFromParent = EMPTY_PLAYLIST,
}: Props) => {
  const [playlist, setPlaylist] = useState(playlistFromParent);

  // Watch parent props, and update state
  useEffect(() => {
    setPlaylist(playlistFromParent);

    return () => {
      console.log("Editor Destroyed");
    };
  }, [playlistFromParent]);

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylist({ ...playlist, name: event.target.value });
  };

  const submit = () => {
    onSave(playlist);
  };

  const { ref: nameRef, focus } = useFocus();

  return (
    <div>
      {/* <pre>{JSON.stringify(playlistFromParent, null, 2)}</pre>
      <pre>{JSON.stringify(playlist, null, 2)}</pre> */}

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input
            ref={nameRef} // render DOM
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