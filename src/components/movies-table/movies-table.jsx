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
    {},
    {}
  ]

  render() {
    const { moviesByPage, onAddLike, onDeleteMovie } = this.props;

    return (
      <table className="table">
        <TableHeader
          sortColumn = {this.props.sortColumn}
          onSort = {this.props.onSort}
          tableHeaderFields = {this.tableHeaderFields} />
        <TableBody 
          rowsByPage = {moviesByPage}
          deleteRow = {onDeleteMovie}
          onAddLike = {onAddLike}
          tableHeaderFields = {this.tableHeaderFields} />
      </table>
    );
  }
}

export default MoviesTable;