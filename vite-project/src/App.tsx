import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "primereact/button";

function App() {
  const [count, setCount] = useState(110);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <p>Ala ma kota !</p>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
