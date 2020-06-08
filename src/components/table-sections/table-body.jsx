import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
class TableBody extends Component {

  renderCell = (item, column) => {
    if (column.functionality) return column.functionality(item);
    return _.get(item, column.path);
  }

  render() {
    const { rowsDataByPage, tableHeaderFields } = this.props;
    return (
      <tbody>
        {rowsDataByPage.map((item, index) =>
          <tr>
            <th scope="row">{index + 1}</th>
            {tableHeaderFields.map(column => {
              const dataByField = column.path === 'title' ?
                <td>
                  <Link to={`/movies/${_.get(item, '_id')}`}>
                    {this.renderCell(item, column)}
                  </Link>
                </td>
                : <td>{this.renderCell(item, column)}</td>;
              return dataByField;
            })}
          </tr>
        )}
      </tbody>
    );
  }
}

export default TableBody;