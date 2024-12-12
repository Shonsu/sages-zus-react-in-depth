import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";

type Props = {};

const AlbumSearchView = (props: Props) => {
  function search(query: string) {
    fetchAlbumSearchResults(query);
  }

  return (
    <div>
      {/* .grid.gap-5>div*2 */}
      <div className="grid gap-5">
        <div>
          <SearchForm />
        </div>
        <div>
          <ResultsGrid />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
