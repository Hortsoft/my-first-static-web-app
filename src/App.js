import React, { useState, useEffect } from 'react';

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
    <ul>
    {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      </ul>
          
    </div>
  )
}

export default App;
