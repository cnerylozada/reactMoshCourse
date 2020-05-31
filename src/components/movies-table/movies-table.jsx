import React from 'react';
import './movies-table.css';
import Like from '../../_commons/like/like';

const MoviesTable = props => {
  const { moviesByPage, OnAddLike, OnDeleteMovie,
    sortByTitle, sortByGenre, sortByStock, sortByRate } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" onClick={sortByTitle}>Title</th>
          <th scope="col" onClick={sortByGenre}>Genre</th>
          <th scope="col" onClick={sortByStock}>Stock</th>
          <th scope="col" onClick={sortByRate}>Rate</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
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
                <Like movie={_} onLike={OnAddLike} />
              </td>
              <td>
                <button onClick={() => { OnDeleteMovie(_._id) }}
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

export default MoviesTable;