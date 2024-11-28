import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

window.React = React;
window.ReactDOM = ReactDOM;

import "primereact/resources/themes/lara-light-cyan/theme.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
