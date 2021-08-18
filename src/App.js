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
        {data.map((tree) => (
          <li key={tree.id}>
            <h3>
              {tree.id} {tree.name}
            </h3>
            <p>{tree.name}</p>
          </li>
        ))}
      </ul>
          
    </div>
  )
}

export default App;
