import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })
    
    .catch((err) => {
      setError(err);
    })

    .finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>You link data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }
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
