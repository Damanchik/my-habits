//* Черновая страница для проверки работоспособности react-router
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      Login Page
      <Link to="/registration" color="inherit">
        Регистрация
      </Link>
      <Link to="/">Домой</Link>
    </div>
  );
};

export default LoginPage;
