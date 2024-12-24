import { IFData } from '../../types/interface';


function results(props: {data: IFData[]}) {
  return (
     <table className="table">
         <thead>
           <tr>
             <th>Name</th>
             <th>URL</th>
           </tr>
         </thead>
          <tbody>
            {props.data.map((obj, idx) => {
              return (
                <tr key={idx}>
                  <td>{obj.name}</td>
                  <td>{obj.url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
  )
}

export default results