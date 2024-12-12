import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

window.React = React;
window.ReactDOM = ReactDOM;
import { HTTPError } from "ky";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const RETRY_CODES = [408, 429, 500, 502, 503, 504];

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount, error) {
        if (!(error instanceof HTTPError)) throw "not HTTPError";

        return RETRY_CODES.indexOf(error.response.status) !== -1;
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {" "}
    {/* Strict useEffect! */}
    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PrimeReactProvider>
  </StrictMode>
);
