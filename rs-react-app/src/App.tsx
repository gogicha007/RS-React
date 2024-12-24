import SearchBar from './components/search/search';
import Results from './components/results/results';
import './App.css';
import { Component, ReactNode } from 'react';
import { IFData } from './types/interface';
import ErrorButton from './components/errorButton/errorButton';

class App extends Component {
  
  state = {
    results: [] as IFData[],
  };
  
  handleDataChange = (results: IFData[]) => {
    this.setState({ results });
  };
  render(): ReactNode {
    // throw Error("oops")
    return (
      <>
        <div className="top-control">
          <SearchBar onDataChange={this.handleDataChange} />
          <ErrorButton/>
        </div>
        <div className="results">
          <h2>Results</h2>
          {this.state.results && this.state.results.length > 0 && (
            <Results data={this.state.results} />
          )}
        </div>
      </>
    );
  }
}

export default App;
