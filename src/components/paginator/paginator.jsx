import React, { Component } from 'react';

const Paginator = (props) => {
  return (
    <nav>
      <ul className="pagination">
        {[...Array(props.numOfPages).keys()].map(_ => {
          return <li className="page-item pagination-lg" key={_}>
            <a className="page-link" href="#"
              onClick={() => props.sectionsByPage(_)}>{_ + 1}</a>
          </li>
        })}
      </ul>
    </nav>
  );
}

export default Paginator;