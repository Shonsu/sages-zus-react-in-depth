import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React from "react";

type Props = {};

const SearchForm = (props: Props) => {
  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText placeholder="Search" value={''} onChange={()=>{}} />
        <Button icon="pi pi-search" className="p-button-primary px-10" />
      </div>
    </div>
  );
};

export default SearchForm;
