import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "primereact/button";
import PlaylistsView from "./playlists/components/PlaylistsView";
import AppButton from "./common/components/AppButton";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import { checkLogin, login } from "./common/services/Auth";

function App() {
  
  const status = useMemo(() => checkLogin(), []); // before render
  
  useEffect(() => checkLogin(), []); // after first render

  return (
    <>
      <div className=" bg-green-600 py-4">
        <div className="container py-2 ">
          <AppButton primary className="float-end" onClick={login}>
            Login
          </AppButton>
          <h1 className="text-3xl font-bold text-white">MusicApp</h1>
        </div>
      </div>
      <div className="container my-5">
        <AlbumSearchView />
      </div>
    </>
  );
}

export default App;
