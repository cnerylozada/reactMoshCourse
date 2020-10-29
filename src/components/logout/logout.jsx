import { useEffect } from "react";
import usersService from "../../services/users.service";

const Logout = () => {
  useEffect(() => {
    usersService.logout();
    window.location = "/";
  }, []);
  return null;
};

export default Logout;
