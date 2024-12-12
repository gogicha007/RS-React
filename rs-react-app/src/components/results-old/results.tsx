type ResProps = {
  results: any[];
};

export const Results = (results: ResProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {results.results.map((obj) => {
          return (
            <tr>
              <td>{obj.name}</td>
              <td>{obj.url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
