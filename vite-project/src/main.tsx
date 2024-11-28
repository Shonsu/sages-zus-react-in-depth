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
  pet: {
    name: string;
  };
}

const user: User = {
  id: "123",
  name: "Alice",
  color: "red",
  pet: { name: "Cat" },
};

// const vdiv = (props: { user: User, x?:boolean }) => {
//   const user = props.user;
//   const { user, x } = props;

// const vdiv = ({user: userAlias }: { user: User }) => {

const vdiv = ({user}: { user: User }) => {

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
      `${user.name} has a ${user.pet.name}`
    )
  );
};

root.render(vdiv({ user }));
