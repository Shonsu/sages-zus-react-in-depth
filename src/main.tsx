import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

window.React = React;
window.ReactDOM = ReactDOM;

import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode> {/* Strict useEffect! */}
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
