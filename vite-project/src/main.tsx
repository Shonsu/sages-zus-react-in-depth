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

const UserProfile = ({ user }: { user: User }) => (
  <div className="user-profile" id={"user_" + user.id} title={user.name}>
    <p style={{ color: user.color }}>
      {user.pet
        ? `${user.name} has a ${user.pet.name}`
        : `${user.name} has no pet`}
    </p>
  </div>
);

const UserProfile2 = ({ user }: { user: User }) => {
  return React.createElement(
    "div",
    {
      id: "user_" + user.id,
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

const UserList = ({ users }: { users: User[] }) => (
  <div>
    <ul>
      {users.map((user) => (
        // <li key={user.id}>{UserProfile({ user })}</li>
        <li key={user.id}>
          <UserProfile user={user}/>
        </li>
      ))}
    </ul>
  </div>
);
const UserList2 = ({ users }: { users: User[] }) =>
  React.createElement(
    "ul",
    {},
    users.map((user) =>
      React.createElement(
        "li",
        {
          key: user.id,
        },
        // UserProfile({ user }) // call before render, send result
        React.createElement(UserProfile, { user }) // send Function, call it later
      )
    )
  );

const root = createRoot(document.getElementById("root")!);

root.render(UserList({ users }));
