import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Login from './pages/Login'

const ProtectedRoute = ({ path, exact, children }) => {
//   const auth = useSelector((store) => store.authenticated);
  const user = useSelector((state) => state.auth)

  return user ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Route path='/login' element={<Login />} />
  );
};

export default ProtectedRoute;