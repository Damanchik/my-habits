import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
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

export default RegistrationPage;
