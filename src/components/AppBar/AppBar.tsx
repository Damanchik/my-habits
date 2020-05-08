import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Logo from '../Logo';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AppBar = () => (
  <Router>
    <MuiAppBar position="static" color="primary">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Box pr={1} component="span">
              <Link to="/login" color="inherit">
                Войти
              </Link>
            </Box>
            <Link to="/register" color="inherit">
              Регистрация
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  </Router>
);

export default AppBar;
