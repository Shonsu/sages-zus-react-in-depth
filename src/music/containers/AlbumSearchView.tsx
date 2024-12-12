import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { ProgressSpinner } from "primereact/progressspinner";
import { useFetch, useFetchAlbums } from "./useFetchAlbums";
import { BigSpinner } from "../../common/components/BigSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { VStack } from "../../common/components/Stack";
import { fetchAlbumSearchResults } from "../../common/services/MusicAPI";

const AlbumSearchView = () => {
  const [query, setQuery] = useState("");

  // const { data: results = [], isLoading, error } = useFetchAlbums(query);
  
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
