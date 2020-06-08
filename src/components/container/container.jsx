import React from 'react';
import Movies from '../movies/movies';
import Rentals from '../rentals/rentals';
import Customers from '../customers/customers'
import NotFound from '../not-found/not-found'
import './container.css';
import NavBar from '../navbar/navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import MoviesDetail from '../movies-detail/movies-detail';

const Container = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movies/:id" component={MoviesDetail} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  )
}

export default Container;