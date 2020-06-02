import React, { Component } from 'react';
import _ from 'lodash';
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
            {tableHeaderFields.map(column =>
              <td>{this.renderCell(item, column)}</td>)}
          </tr>
        )}
      </tbody>
    );
  }
}

export default TableBody;