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
const RETRY_CODES = [408, 429, 500, 502, 503, 504];

import { RouterProvider, createBrowserRouter, redirect } from "react-router";
import AlbumSearchView from "./music/containers/AlbumSearchView.tsx";
import PlaylistsView from "./playlists/components/PlaylistsView.tsx";
import AlbumDetailView from "./music/containers/AlbumDetailView.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        // element: <div>HEllo!</div>,
        loader: () => redirect("/music/search"),
      },
      {
        path: "music",
        children: [
          {
            path: "search",
            element: <AlbumSearchView />,
          },
          {
            path: "albums/:albumId",
            element: <AlbumDetailView />,
          },
        ],
      },
      {
        path: "playlists",
        element: <PlaylistsView />,
      },
      {
        path: "*",
        element: (
          <div className="text-center">
            <h1 className=" text-6xl">404</h1>
            <p>Page not found</p>
            <a href="/">go to Home</a>
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PrimeReactProvider>
  </StrictMode>
);
