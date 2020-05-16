import React, { Component } from 'react';
import Movies from '../movies/movies';
import './container.css';
const Container = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1 className="display-4">Movies</h1>
          <Movies />
        </div>
      </div>
    </div>
  )
}

export default Container;