import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "primereact/button";
import PlaylistsView from "./playlists/components/PlaylistsView";
import AppButton from "./common/components/AppButton";

function App() {
  const [count, setCount] = useState(110);

  return (
    <>
      <div className="container my-5">
        <AppButton primary className="float-end">Login</AppButton>
        <h1 className="text-3xl font-bold ">MusicApp</h1>
        <PlaylistsView />
      </div>
    </>
  );
}

export default App;
