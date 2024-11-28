import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom";

// Debugging
// window.placki = 123

window.React = React;
window.ReactDOM = ReactDOM;

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById("root")!);

interface User {
  id: string;
  name: string;
  color: string;
  pet?: {
    name: string;
  };
}

const users: User[] = [
  {
    id: "123",
    name: "Alice",
    color: "red",
    pet: { name: "Cat" },
  },
  {
    id: "234",
    name: "Bob",
    color: "yello",
    // pet: { name: "Dog" },
  },
  {
    id: "345",
    name: "Cathrine",
    color: "blue",
    pet: { name: "Snake" },
  },
];

const UserProfile = ({ user }: { user: User }) => {
  return React.createElement(
    "div",
    {
      id: user.id,
      title: user.name,
      className: "user-profile",
    },
    React.createElement(
      "p",
      {
        style: { color: user.color },
      },
      user.pet
        ? `${user.name} has a ${user.pet.name}`
        : `${user.name} has no pet`
    )
  );
};

const UserList = ({ users }: { users: User[] }) =>
  React.createElement(
    "ul",
    {},
    users.map((user) =>
      React.createElement(
        "li",
        {
          key: user.id,
        },
        UserProfile({ user })
      )
    )
  );

// root.render(UserList({ users: users }));
root.render(UserList({ users }));
