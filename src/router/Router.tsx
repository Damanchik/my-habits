import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';

// @ts-ignore
const Router = ({ navbar: NavBar, template: Template }) => (
  <BrowserRouter>
    <CssBaseline />
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
        <Template>
          <div>tasks </div>
        </Template>
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
