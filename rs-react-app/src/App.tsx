import SearchBar from './components/search/search';
import './App.css';

function App() {
 

  return (
    <>
      <div className="top-control">
        <SearchBar/>
      </div>
      <div className="results">
        <h2>Results</h2>
      </div>
    </>
  );
}

export default App;
