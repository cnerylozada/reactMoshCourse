import React, { Component } from 'react';

class TableHeader extends Component {
  raiseSort = fieldSelected => {
    const sortColumn = { ...this.props.sortColumn };
    sortColumn.field = fieldSelected;
    sortColumn.order === 'asc' ? sortColumn.order = 'desc' : sortColumn.order = 'asc';
    this.props.onSort(sortColumn);
  }

  render() {
    return (
      <thead>
        <tr>
          <th scope="col">#</th>
          {this.props.tableHeaderFields.map((_, i) => {
            return (
              <th scope="col" key={i}
                onClick={() => this.raiseSort(_.path)}>
                {_.label}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;