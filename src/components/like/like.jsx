import React, { Component } from 'react';

class Like extends Component {
  showLike = isLiked => {
    let className = 'fa fa-heart';
    return !!isLiked ? className : className += '-o';
  }
  render() {
    const {onLike, movie} = this.props;
    return (
      <button type="button" onClick={() => {onLike(movie)}}
        className="btn btn-link">
        <i className={this.showLike(movie.like)}></i>
      </button>
    )
  }
}

export default Like;