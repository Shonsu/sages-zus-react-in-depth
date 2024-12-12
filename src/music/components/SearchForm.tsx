import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { FormEvent, useState } from "react";

type Props = { onSearch: (query: string) => void };

const SearchForm = ({onSearch}: Props) => {
  const [draft, setDraft] = useState("");

  // const submit = (event: 'prawy but') => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // no reload!

    onSearch(draft)
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
