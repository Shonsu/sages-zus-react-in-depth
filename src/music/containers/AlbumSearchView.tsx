import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";
import { Album } from "../../common/model/Album";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Album[]>([]);

  useEffect(() => {
    if (!query) return;

    fetchAlbumSearchResults(query).then((data) => setData(data));
  }, [query]);

  return (
    <div>
      {/* .grid.gap-5>div*2 */}
      <div className="grid gap-5">
        <div>
          <SearchForm onSearch={setQuery} />
        </div>
        <div>
          <ResultsGrid results={data} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
