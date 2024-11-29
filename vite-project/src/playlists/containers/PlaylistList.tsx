import React, { useState } from "react";
import { mockPlaylists } from "./mockPlaylists";
import type { Playlist } from "./Playlist";

type Props = {
  playlists: Playlist[];
  selectedId?: string;
  onSelect: (id: string) => void;
  // onSelect(id: string): void;
};

const PlaylistList = ({ playlists, selectedId, onSelect }: Props) => {
  return (
    <div>
      <div className="divide-y divide-slate-400 divide-solid">
        {playlists.map((p, index, all) => (
          <div
            className={`px-2 py-5  ${
              selectedId == p.id
                ? "bg-primary-300 text-white"
                : "cursor-pointer hover:bg-primary-100"
            } `}
            onClick={() => onSelect(p.id)}
            key={p.id}
          >
            {index + 1} {p.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
