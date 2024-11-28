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

const root = createRoot(document.getElementById('root')!)

const vdiv = React.createElement('div', { id:'123',title:'test'},
    React.createElement('p',{ 
        style: { color:'yellow' }, 
        className:'placki'
    },'ALice ma kota'),
    React.createElement('input',{ key:'pamietaj o mnie' }),
    'placki',
)

root.render(vdiv)

// ReactDOM.render(vdiv, root)

// div = document.createElement('div')
// p = document.createElement('p')
// p.innerText = 'Ala ma kota'
// div.append(p)
// root  = document.getElementById('root')
// root.append(div) 

// user = '<h1> Ala <script> <img> '
// div.innerHTML = `<div> <p>${user} ma <b>kota<b></p> <input></div>`
