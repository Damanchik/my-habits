import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import data from '../pages/tasks/stubs';
import Task from '../components/Task/Task';
import NewTask from '../components/NewTask/NewTask';

const yourTasks = data.map(task => (
  <Task
    key={task.id}
    name={task.name}
    description={task.description}
    imgUrl={task.imgUrl}
  />
));

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
      <Route path="/tasks/add">
        <Template>
          <NewTask />
        </Template>
      </Route>
      <Route path="/tasks">
        <Template>{yourTasks}</Template>
      </Route>
      <Route path="/goals">
        <div>Goals</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
