import React from "react";
import PropTypes from "prop-types";
import "./paginator.css";

const Paginator = ({ numOfPages, currentPage, onPageChange }) => {
  const pages = [...Array(numOfPages).keys()];
  const buttonStyle = "page-item pagination-lg";
  if (pages.length === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map((_) => {
          return (
            <li
              key={_}
              className={
                _ === currentPage ? buttonStyle + " active" : buttonStyle
              }
            >
              <span className="page-link" onClick={() => onPageChange(_)}>
                {_ + 1}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  numOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Paginator;
