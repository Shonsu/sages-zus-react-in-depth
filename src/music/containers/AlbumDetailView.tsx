import React, { useEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router";
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

  // const {
  //   data: album,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["album/details/", albumId],
  //   queryFn: () => fetchAlbumById(albumId),
  // });

  const album = useLoaderData<typeof fetchAlbumById>();

  const [currentTrack, setCurrentTrack] = useState<Track>();

  const playTrack = (id: string): void => {
    setCurrentTrack(album?.tracks.items.find((t) => t.id == id)!);
  };

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!currentTrack || !audioRef.current) return;

    audioRef.current.volume = 0.2;
    audioRef.current.play();
  }, [currentTrack]);

  // if (error) return <ErrorMessage error={error} />;
  // if (!album) return <BigSpinner show={album} />;

  return (
    <div>
      {albumId}

      <div className="grid grid-cols-2 gap-5">
        <div>
          {/* <AlbumCard album={album} /> */}
          <iframe
            title="Spotify"
            className="SpotifyPlayer"
            src={`https://embed.spotify.com/?uri=${
              album?.uri
            }&view=${"coverart"}&theme=${"white"}`}
            width={400}
            height={400}
            allowTransparency={true}
          />
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

          <audio
            ref={audioRef}
            controls
            className="w-full"
            // src={currentTrack?.preview_url}
            src="https://p.scdn.co/mp3-preview/12bbb71164d26570ce3fad1a9208628d252f3527"
          />

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
