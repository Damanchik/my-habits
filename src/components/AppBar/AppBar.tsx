import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Logo from '../Logo';
import Link from '../Link';

const AppBar = () => (
  <MuiAppBar position="static" color="primary">
    <Toolbar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Logo />
        </Grid>
        <Toolbar>
          <Grid container>
            <Box pr={1} component="span">
              <Link label="Войти" to="/login" />
            </Box>
            <Link label="Зарегистрироваться" to="/registration" />
          </Grid>
        </Toolbar>
      </Grid>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
