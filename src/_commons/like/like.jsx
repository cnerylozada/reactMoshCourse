import React from 'react';

const showLike = isLiked => {
  let className = 'fa fa-heart';
  return !!isLiked ? className : className += '-o';
}

const Like = ({ onLike, movie }) => {
  return (
    <button type="button" onClick={() => { onLike(movie) }}
      className="btn btn-link">
      <i className={showLike(movie.like)}></i>
    </button>
  )
}

export default Like;