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

const vdiv = (props:{
  id: string;
  name: string;
  color: string;
  pet: {
    name: string;
  };
}) =>
  React.createElement(
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

root.render(vdiv);

// ReactDOM.render(vdiv, root)

// div = document.createElement('div')
// p = document.createElement('p')
// p.innerText = 'Ala ma kota'
// div.append(p)
// root  = document.getElementById('root')
// root.append(div)

// user = '<h1> Ala <script> <img> '
// div.innerHTML = `<div> <p>${user} ma <b>kota<b></p> <input></div>`
