import React, { Component } from 'react';
import Like from '../../_commons/like/like';

class TableBody extends Component {
  render() {
    const { rowsByPage, deleteRow, onAddLike, tableHeaderFields } = this.props;
    return (
      <tbody>
        {rowsByPage.map((_, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{_.title}</td>
              <td>{_.genre.name}</td>
              <td>{_.numberInStock}</td>
              <td>{_.dailyRentalRate}</td>
              <td>
                <Like movie={_} onLike={onAddLike} />
              </td>
              <td>
                <button onClick={() => { deleteRow(_._id) }}
                  type="button" className="btn btn-danger">
                  Delete
              </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    );
  }
}

export default TableBody;