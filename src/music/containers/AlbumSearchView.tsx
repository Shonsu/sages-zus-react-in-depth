import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";
import { Album } from "../../common/model/Album";
import { ProgressSpinner } from "primereact/progressspinner";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const [query, setQuery] = useState("");

  const [data = [], setData] = useState<Album[] | undefined>([]);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const huston = new AbortController();

    setIsLoading(true);
    setError(undefined);
    setData(undefined);

    fetchAlbumSearchResults(query, { signal: huston.signal })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

    return () => huston.abort("Cancel");
  }, [query]);

  return (
    <div>
      {/* .grid.gap-5>div*2 */}
      <div className="grid gap-5">
        <div>
          <SearchForm onSearch={setQuery} />
        </div>
        <div>
          {isLoading && (
            <ProgressSpinner className="flex justify-center my-10" />
          )}
          {error instanceof Error && (
            <p className="p-5 text-red-500 border border-solid border-red-500">
              {error.message}
            </p>
          )}

          <ResultsGrid results={data} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
