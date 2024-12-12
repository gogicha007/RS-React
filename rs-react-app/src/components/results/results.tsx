import { Component } from 'react';
import { IFData } from '../../types/interface';

class Results extends Component<{ data: IFData[] }> {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((obj, idx) => {
            return (
              <tr key={idx}>
                <td>{obj.name}</td>
                <td>{obj.url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Results;
