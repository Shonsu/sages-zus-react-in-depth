import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { ProgressSpinner } from "primereact/progressspinner";
import { useFetchAlbums } from "./useFetchAlbums";
import { BigSpinner } from "../../common/components/BigSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { VStack } from "../../common/components/Stack";

const AlbumSearchView = () => {
  const [query, setQuery] = useState("");

  const { data, isLoading, error } = useFetchAlbums(query);

  return (
    <VStack>
      <SearchForm onSearch={setQuery} />

      <VStack gap="sm">
        <BigSpinner show={isLoading} />
        <ErrorMessage error={error} />
        <ResultsGrid results={data} />
      </VStack>
    </VStack>
  );
};

export default AlbumSearchView;
