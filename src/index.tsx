import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <div> Register </div>
        </Route>
        <Route path="/logout">
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
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
