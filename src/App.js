import React from 'react';
import { useAsync } from 'react-async';
import { Link } from 'react-router-dom';

// Then we'll fetch user data from this API
const loadUsers = async () =>
  await fetch(`/api/message`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
 
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
      </div>
      {data.map(user=> (
        <div key={user.id} className="row">
          <div className="col-md-12">
            <Link to={`{user.name}`}>{user.name}</Link>
          </div>
        </div>
      ))}
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