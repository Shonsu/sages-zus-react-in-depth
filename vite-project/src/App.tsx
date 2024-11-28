import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "primereact/button";
import PlaylistsView from "./playlists/components/PlaylistsView";


function App() {
  const [count, setCount] = useState(110);

  return (
    <>
      <div className="container my-5">
        .borderprim
        <Button
          className="float-end"
          pt={{
            root: {
              className: "bg-primary-400 border-primary-500 hover:bg-primary-300",
            },
          }}
        >
          Login
        </Button>
        <h1 className="text-3xl font-bold ">MusicApp</h1>
        <PlaylistsView />
        <div style={{ border: "1px solid", accentColor: "" }}></div>
      </div>
    </>
  );
}

export default App;
