import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div>
      <p>String : {data.id}</p>
      <p>Number : {data.name}</p>
    </div>
  )
}

export default App;
