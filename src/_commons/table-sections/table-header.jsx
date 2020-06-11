import React, { Component } from 'react';

class TableHeader extends Component {

  raiseSort = fieldSelected => {
    const sortColumn = { ...this.props.sortColumn };
    sortColumn.field = fieldSelected;
    sortColumn.order === 'asc' ? sortColumn.order = 'desc' : sortColumn.order = 'asc';
    this.props.onSort(sortColumn);
  }

  renderSortIcon = column => {
    const {sortColumn} = this.props;
    if (column.path !== sortColumn.field) return null;
    if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />
    return <i className="fa fa-sort-desc" />;
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
                {_.label} {this.renderSortIcon(_)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;