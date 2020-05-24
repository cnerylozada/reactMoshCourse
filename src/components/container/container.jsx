import React, { Component } from 'react';
import Movies from '../movies/movies';
import './container.css';
const Container = () => {
  return (
    <div className="container">
      <h1 className="display-4">Movies</h1>
      <div className="row">
        <Movies></Movies>
      </div>
    </div>
  )
}

export default Container;