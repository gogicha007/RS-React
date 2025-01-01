import { IFCharacter } from '../../types/interface';

function results(props: { data: IFCharacter[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Hair</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((obj, idx) => {
          return (
            <tr key={idx}>
              <td>{obj.name}</td>
              <td>{obj.gender}</td>
              <td>{obj.hair}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default results;
