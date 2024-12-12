import React, { useState } from "react";
import { useParams } from "react-router";
import { fetchAlbumById } from "../../common/services/MusicAPI";
import { useQueries, useQuery } from "@tanstack/react-query";
import AlbumCard from "../components/AlbumCard";
import { BigSpinner } from "../../common/components/BigSpinner";
import { ErrorMessage } from "../../common/components/ErrorMessage";
import TracksList from "../components/TracksList";
import { Track } from "../../common/model/Album";

type Props = {};

const AlbumDetailView = (props: Props) => {
  const { albumId = "" } = useParams();

  const {
    data: album,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["album/details/", albumId],
    queryFn: () => fetchAlbumById(albumId),
  });

  const [currentTrack, setCurrentTrack] = useState<Track>();
  const playTrack = (id: string): void => {
    setCurrentTrack(album?.tracks.items.find((t) => t.id == id)!);
  };

  if (error) return <ErrorMessage error={error} />;
  if (!album) return <BigSpinner show={album} />;

  return (
    <div>
      {albumId}

      <div className="grid grid-cols-2 gap-5">
        <div>
          <AlbumCard album={album} />
        </div>

        {/* .grid.gap-5>.grid.gap-2*3>strong{Name}+div */}
        <div className="grid gap-5">
          <div className="grid gap-2">
            <strong>Name</strong>
            <div>{album.name}</div>
          </div>
          <div className="grid gap-2">
            <strong>Name</strong>
            <div>{album.artists[0].name}</div>
          </div>
          <TracksList
            items={album.tracks.items}
            selectedId={currentTrack?.id}
            onSelect={playTrack}
          />
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailView;
