import React, { useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import isLogin from './authorization';

const SecureRoute = (Element) => {
  const [isLogged] = useState(isLogin);
  return isLogged ? () => <Element /> : () =>  <Navigate to='/login' />;
};

export default SecureRoute;