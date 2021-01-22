import React, { useEffect, useState } from 'react';
import './App.css';

type DataItem = {
  title:string;
  text:string;
}

function App() {
  const [data, setData] = useState<DataItem[]>([]);

  const messageListener = (event:MessageEvent<DataItem>) => {
    if(event.origin !== 'http://localhost:3000') { // we can add Regex origin check
      console.log("sorry, but we don't expect your message");
      return;
    }

    setData(value => [...value, ...[event.data]]);
  }

  useEffect(() => {
    window.addEventListener("message", messageListener, false);
    return () => window.removeEventListener("message", messageListener, false);
  }, [])

  return (
    <> 
      <h1>Shop</h1>
      {data.map((item, index) => (
        <div key={`item-${index}`} className="item">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </>
  );
}

export default App;
