import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import Tasks from '../pages/tasks/TasksPage';

// @ts-ignore
const Router = ({ navbar: NavBar }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <NavBar />
        <HomePage />
      </Route>
      <Route path="/login">
        <NavBar />
        <LoginPage />
      </Route>
      <Route path="/registration">
        <NavBar />
        <RegistrationPage />
      </Route>
      <Route path="/logout">
        <div>LogOut</div>
      </Route>
      <Route path="/tasks">
        <Tasks />
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
