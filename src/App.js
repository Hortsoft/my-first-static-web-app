import React, { useState, useEffect, Suspense } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <ul>
        {data.map((item) => (
          <li key={item}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
