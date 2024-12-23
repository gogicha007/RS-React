import { Component } from 'react';
import { IFData } from '../../types/interface';
import './search.css';

class SearchBar extends Component<
  { onDataChange: (data: IFData[]) => void },
  { input: string }
> {
  constructor(props: { onDataChange: (data: IFData[]) => void }) {
    super(props);
    this.state = {
      input: '',
    };
    this.clickSearch = this.clickSearch.bind(this);
  }
  clickSearch = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/${this.state.input}`
    );
    const data = await response.json();
    this.props.onDataChange(data.results);
  };

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search the site</label>
        <input
          onInput={(e) =>
            this.setState({ input: (e.target as HTMLInputElement).value })
          }
          type="search"
          id="search"
          name="s"
        />
        <button onClick={this.clickSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
