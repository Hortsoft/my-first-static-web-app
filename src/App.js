import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div> 
    <ul>
        {data.map((dat) => (
          <li key={dat.id}>
            <h3>
              {dat.id} {dat.name}
            </h3>
            <p>{dat.name}</p>
          </li>
        ))}
      </ul>
          
    </div>
  )
}

export default App;
