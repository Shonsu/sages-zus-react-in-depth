import React from "react";
import AlbumCard from "./AlbumCard";
import { Album } from "../../common/model/Album";

type Props = {
  results: Album[]; 
};

const ResultsGrid = ({results}: Props) => {
  return (
    <div className="grid sm:grid-cols-3 sm:gap-2 md:grid-cols-4 md:gap-5">
      {results.map((result) => {
        return <AlbumCard album={result} key={result.id}/>;
      })}
    </div>
  );
};

export default ResultsGrid;
