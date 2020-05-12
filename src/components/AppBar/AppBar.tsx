import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const AppBar = () => (
  <MuiAppBar position="static" color="primary">
    <Toolbar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Box pr={1} component="span">
            <Link to="/login">Войти</Link>
          </Box>
          <Link to="/register" color="inherit">
            Регистрация
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
