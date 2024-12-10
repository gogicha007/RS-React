import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="top-control">
        <div>
          <label htmlFor="site-search">Search the site</label>
          <input type="search" id="site-search" name="q" />
          <button onClick={()=>{}}>Search</button>
        </div>
      </div>
      <div className="results">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
