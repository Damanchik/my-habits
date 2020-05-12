import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import LoginPage from '../components/LoginPage';

// @ts-ignore
const Router = ({ navbar: NavBar }) => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <div>Register</div>
      </Route>
      <Route path="/logout">
        <div>LogOut</div>
      </Route>
      <Route path="/tasks">
        <div>Tasks</div>
      </Route>
      <Route path="/goals/add">
        <div>Add goals</div>
      </Route>
      <Route path="/goals">
        <div>Goals</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
