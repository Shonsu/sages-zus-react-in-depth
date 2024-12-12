import React from "react";
import AlbumCard from "./AlbumCard";

type Props = {};

const ResultsGrid = (props: Props) => {
  return (
    <div className="grid sm:grid-cols-3 sm:gap-2 md:grid-cols-4 md:gap-5">
      {[1, 2, 3, 4, 5].map((result) => {
        return <AlbumCard />;
      })}
    </div>
  );
};

export default ResultsGrid;
