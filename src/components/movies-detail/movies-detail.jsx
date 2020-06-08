import React from 'react';

const MoviesDetail = ({match}) => {
  return (
    <div>
      Movie Form id: {match.params.id}
    </div>
  );
}

export default MoviesDetail;