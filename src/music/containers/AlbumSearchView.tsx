import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { useFetch } from "../../common/hooks/useFetchAlbums";
import { BigSpinner } from "../../common/components/BigSpinner";
import { ErrorMessage } from "../../common/components/ErrorMessage";
import { VStack } from "../../common/components/Stack";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";

const AlbumSearchView = () => {
  const [query, setQuery] = useState("");

  const {
    data: results = [],
    isLoading,
    error,
  } = useFetch(query, fetchAlbumSearchResults);

  return (
    <VStack>
      <SearchForm onSearch={setQuery} />

      <VStack gap="sm">
        <BigSpinner show={isLoading} />
        <ErrorMessage error={error} />
        <ResultsGrid results={results} />
      </VStack>
    </VStack>
  );
};

export default AlbumSearchView;
