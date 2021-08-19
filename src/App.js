import React from 'react'; 
import { useAsync } from 'react-async'; 

import { Link, BrowserRouter as Router } from 'react-router-dom'

// Then we'll fetch user data from this API
const loadUsers = async () =>
  await fetch(`/api/message`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
 
    function addRecordAPI() {
      alert('Trying to add a record!');
        fetch(`/api/addrecord`)
    }

function App() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)
  
  // The rendered component
  return (
    <div className="container">
      <div>
        <h2>React Async - Cosmos DB Trees</h2>
        <button style={{background:'green'}} onClick={addRecordAPI}>Default</button>
        <Router>
        <Link to="first"> add</Link>
          <ul>
            {data.map((user) => (
              <li style={{ textDecoration: 'none' }} >
                <Link to={user.name} activeClassName="active-link">
                 {user.name} 
                </Link>
              </li>
            ))}
          </ul>{" "}
        </Router>
      </div>
    </div> 
  );
}
export default App;

   
//function App() {
//  const [data, setData] = useState([]);
  
//  useEffect(() => {
  //  (async function () {
//      const { text } = await( await fetch(`/api/message`)).json();
  //    setData(text);
//    })
//    .catch((err) => {
//      console.log(err);
 //   });
//}, []);

//  return (
//    <div>
//      <Suspense fallback={<div>Loading...</div>}></Suspense>
//      <ul>
//        {data.map((item) => (
//          <li key={item}>{item.name}</li>
//        ))}
//      </ul>
//    </div>
//  );
//}