import React, { Component } from 'react';
import './movies-table.css';
import Like from '../../_commons/like/like';
import TableHeader from '../table-sections/table-header';
import TableBody from '../table-sections/table-body';

class MoviesTable extends Component {

  tableHeaderFields = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      functionality: movie => <Like movie={movie} onLike={this.props.onAddLike} />
    },
    {
      key: 'delete',
      functionality: movie => (<button onClick={() => { this.props.onDeleteMovie(movie._id) }}
        type="button" className="btn btn-danger">Delete</button>)
    }
  ]

  render() {
    const { moviesByPage } = this.props;

    return (
      <table className="table">
        <TableHeader
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
          tableHeaderFields={this.tableHeaderFields} />
        <TableBody
          rowsDataByPage={moviesByPage}
          tableHeaderFields={this.tableHeaderFields} />
      </table>
    );
  }
}

export default MoviesTable;