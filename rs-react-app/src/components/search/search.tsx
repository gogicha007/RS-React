import { Component } from "react";
import './search.css'

class SearchBar extends Component {
    state = {
      input: '',
      results: []
    }

    clickSearch = async ()=> {
      const response = await fetch(`https://pokeapi.co/api/v2/${this.state.input}`);
      const data = await response.json();
      this.state.results = data.results;
      console.log(this.state.results)
    }

    render() {
      return (
        <div className="search-bar">
          <label htmlFor="search">Search the site</label>
          <input
            onInput={(e) => this.state.input = ((e.target as HTMLInputElement).value)}
            type="search"
            id="search"
            name="s"
          />
          <button onClick={this.clickSearch}>Search</button>
        </div>
      );
    }
  }

  export default SearchBar