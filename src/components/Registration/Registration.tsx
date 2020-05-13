import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      Registration Page
      <Link to="/login" color="inherit">
        логин
      </Link>
      <Link to="/">Домой</Link>
    </div>
  );
};

export default Registration;
