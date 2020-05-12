import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import LoginPage from './components/LoginPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register">
        <div> Register </div>
      </Route>
      <Route exact path="/logout">
        <div> LogOut</div>
      </Route>
      <Route path="/tasks">
        <div> Tasks </div>
      </Route>
      <Route path="/goals/add">
        <div> Add goals</div>
      </Route>
      <Route path="/goals">
        <div> Goals</div>
      </Route>
      <Route path="/" exact component={MainPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
