import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
  const [paragraph, setParagraph] = useState(false);

  const howParagraph = () => {
    setParagraph((prefParahraph) => !prefParahraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={paragraph} />
      <Button onClick={howParagraph}>Show new paragraph</Button>
    </div>
  );
}

export default App;
