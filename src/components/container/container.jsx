import React, { useEffect, useState } from "react";
import Movies from "../movies/movies";
import Rentals from "../rentals/rentals";
import Customers from "../customers/customers";
import NotFound from "../not-found/not-found";
import Login from "../login/login";
import NavBar from "../navbar/navbar";
import RegisterForm from "../register/register";
import MoviesDetail from "../movies-detail/movies-detail";
import "./container.css";
import { Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Container = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const { user } = jwtDecode(token);
      setUser(user);
    } catch (error) {}
  }, []);
  return (
    <div className="container">
      <NavBar user={user} />
      <div className="row">
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/login" component={Login} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MoviesDetail} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
};

export default Container;
