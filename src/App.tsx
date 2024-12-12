import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "primereact/button";
import PlaylistsView from "./playlists/components/PlaylistsView";
import AppButton from "./common/components/AppButton";
import AlbumSearchView from "./music/containers/AlbumSearchView";
import { checkLogin, login } from "./common/services/Auth";
import { Link, NavLink, Outlet } from "react-router";

function App() {
  const status = useMemo(() => checkLogin(), []); // before render

  useEffect(() => checkLogin(), []); // after first render

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;

const NavBar = () => {
  return (
    <div className=" bg-green-600 py-4">
      <div className="container py-2 ">
        <AppButton primary className="float-end" onClick={login}>
          Login
        </AppButton>
        <h1 className="text-3xl font-bold text-white">
          <Link to="/">MusicApp</Link>
        </h1>

        <div className="flex gap-4 text-white">
          <NavLink to="/playlists">Playlists</NavLink>
          <NavLink to="/music">Search</NavLink>
        </div>
      </div>
    </div>
  );
};
