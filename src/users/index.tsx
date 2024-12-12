import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { users } from "./users";
import { UserList } from "./UsersList";

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
