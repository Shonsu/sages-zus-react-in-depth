import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom";
import type { User } from "./users/User.tsx";
import { users } from "./users/users.tsx";
import { UserList } from "./users/UsersList.tsx";

// Debugging
// window.placki = 123

window.React = React;
window.ReactDOM = ReactDOM;

const root = createRoot(document.getElementById("root")!);

let usersData = users;

setInterval(() => {
  usersData = [
    usersData[usersData.length - 1],
    ...usersData.slice(0, usersData.length - 1),
  ];

  root.render(UserList({ users: usersData }));
}, 2000);
