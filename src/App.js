import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/database')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
    
    }, []);
    
    
    console.log(data)
  return (
    <div>
      <h1>Data from PostgreSQL:</h1>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>} 
    </div>
  );
}

export default App;