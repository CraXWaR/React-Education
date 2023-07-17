import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [paragraph, setParagraph] = useState(false);

  const howParagraph = () => {
    setParagraph((prefParahraph) => ! prefParahraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {paragraph && <p>This is new paragraph!</p>}
      <Button onClick={howParagraph}>Show new paragraph</Button>
    </div>
  );
}

export default App;
