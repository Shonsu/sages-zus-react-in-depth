import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { FormEvent, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

type Props = {
  query: string;
  onSearch: (query: string) => void;
};

const SearchForm = ({ query, onSearch }: Props) => {
  const [draft, setDraft] = useState(query);

  useEffect(() => setDraft(query), [query]);

  const searchQuery = useDebounce(draft, 300);

  useEffect(() => {
    if (query !== searchQuery) onSearch(searchQuery);
  }, [searchQuery]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(draft);
  };

  return (
    <form onSubmit={submit}>
      <div className="p-inputgroup flex-1">
        <InputText
          placeholder="Search"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <Button
          type="submit"
          icon="pi pi-search"
          className="p-button-primary px-10"
        />
      </div>
    </form>
  );
};

export default SearchForm;
