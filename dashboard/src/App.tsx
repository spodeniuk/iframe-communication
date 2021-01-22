import React, { useRef } from 'react';

import { MockData } from './data.mock';

import './App.css';

function App() {
  const iframe = useRef<HTMLIFrameElement>(null);

  const postData = () => {
    iframe.current?.contentWindow?.postMessage(MockData, '*');
  }

  return (
      <>
      <h1>Dashboard</h1>
      <iframe ref={iframe} name="preview" title="preview" src="http://localhost:3001" frameBorder={0} />
      <button onClick={postData}>Post data</button>
    </>
  );
}

export default App;
