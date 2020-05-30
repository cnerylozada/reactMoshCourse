import React from 'react';
import PropTypes from 'prop-types';

const Paginator = ({numOfPages, currentPage, sectionsByPage }) => {
  const pages = [...Array(numOfPages).keys()];
  const buttonStyle = "page-item pagination-lg";
  if(pages.length === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map(_ => {
          return <li key={_}
            className={_ === currentPage ? buttonStyle +" active" : buttonStyle} >
            <a className="page-link" href="#"
              onClick={() => sectionsByPage(_)}>{_ + 1}</a>
          </li>
        })}
      </ul>
    </nav>
  );
}

Paginator.propTypes = {
  numOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  sectionsByPage: PropTypes.func.isRequired
}
export default Paginator;