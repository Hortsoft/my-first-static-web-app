import React from 'react';

function App() {  
  
  const value = 'World';
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>Hello: {value}<br></br>
  {data}</div>;
 
}

export default App;
