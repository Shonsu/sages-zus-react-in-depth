import React, { useState } from "react";
import { mockPlaylists } from "./mockPlaylists";

type Props = {};

const PlaylistList = (props: Props) => {
  const [selectedId, setSelectedId] = useState(234);

  const selectById = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div>
      {/* .divide-y.divide-slate-400.divide-solid>div*3.px-2.py-5{$. Playlist $$$} */}

      <div className="divide-y divide-slate-400 divide-solid">
        {mockPlaylists.map((p, index, all) => (
          <div
            className={`px-2 py-5 ${
              selectedId == p.id ? "bg-primary-300 text-white" : ""
            } `}
            onClick={() => setSelectedId(p.id)}
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
