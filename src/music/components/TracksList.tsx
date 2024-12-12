import React, { useState } from "react";
import { mockPlaylists } from "./mockPlaylists";
import type { Playlist } from "../../common/model/Playlist";
import { Track } from "../../common/model/Album";

type Props = {
  items: {
    id: string;
    name: string;
  }[];
  selectedId?: string;
  onSelect?: (id: string) => void;
};

const delay = (t = 500) =>
  new Promise<void>((resolve) => setTimeout(resolve, t));

const TracksList = ({ items, selectedId, onSelect }: Props) => {
  return (
    <div>
      <div className="divide-y divide-slate-400 divide-solid">
        {items.map((p, index, all) => (
          <div
            className={`px-2 py-5  ${
              selectedId == p.id
                ? "bg-primary-300 text-white"
                : "cursor-pointer hover:bg-primary-100"
            } `}
            onClick={() => onSelect?.(p.id)}
            key={p.id}
          >
            {index + 1} {p.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksList;
