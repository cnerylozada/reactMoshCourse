import React, { Component } from 'react';
import './movies-table.css';
import Like from '../../_commons/like/like';
import TableHeader from './movies-header';

class MoviesTable extends Component {

  tableHeaderFields = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {},
    {}
  ]

  render() {
    const { moviesByPage, onAddLike, onDeleteMovie } = this.props;

    return (
      <table className="table">
        <TableHeader
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
          tableHeaderFields={this.tableHeaderFields} />
        <tbody>
          {moviesByPage.map((_, index) => {
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
                  <button onClick={() => { onDeleteMovie(_._id) }}
                    type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;