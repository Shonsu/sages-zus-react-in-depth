import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { useFetch } from "../../common/hooks/useFetchAlbums";
import { BigSpinner } from "../../common/components/BigSpinner";
import { ErrorMessage } from "../../common/components/ErrorMessage";
import { VStack } from "../../common/components/Stack";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

const AlbumSearchView = () => {
  // const [query, setQuery] = useState(params.get('q'));

  const [params, updateParams] = useSearchParams({ q: "" });
  const query = params.get("q") || "";

  const {
    data: results,
    error,
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["albums/search", query],
    queryFn: ({ signal }) => fetchAlbumSearchResults(query, { signal }),
    enabled: query !== "",
    initialData: [],
  });

  return (
    <VStack>
      <SearchForm 
        query={query} 
        onSearch={(q) => updateParams({ q })} />

      <VStack gap="sm">
        <BigSpinner show={isLoading} />
        <ErrorMessage error={error} />
        <ResultsGrid results={results} />
      </VStack>
    </VStack>
  );
};

export default AlbumSearchView;
