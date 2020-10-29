import React from "react";
import { Redirect, Route } from "react-router-dom";
import usersService from "../../services/users.service";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!usersService.getCurrentUser()) return <Redirect to="/login" />;
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
