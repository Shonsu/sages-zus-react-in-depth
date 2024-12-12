import { ProgressSpinner } from "primereact/progressspinner";

export const BigSpinner = ({ show }: { show: unknown }) => (
  <>{show && <ProgressSpinner className="flex justify-center my-10" />}</>
);
