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
    <div><ul>
    {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
  </ul>
    </div>
  )
}

export default App;
