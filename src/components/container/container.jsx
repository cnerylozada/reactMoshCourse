import React, { Component } from 'react';
import Movies from '../movies/movies';
import './container.css';
import NavBar from '../navbar/navbar';
const Container = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <Movies></Movies>
      </div>
    </div>
  )
}

export default Container;