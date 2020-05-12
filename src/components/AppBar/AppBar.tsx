import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Logo from '../Logo';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Omit } from '@material-ui/types';

const LinkToLogin = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
  (props, ref) => <RouterLink ref={ref} to="/login" {...props} />
);

const LinkToRegistr = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
  (props, ref) => <RouterLink ref={ref} to="/register" {...props} />
);

const AppBar = () => (
  <MuiAppBar position="static" color="primary">
    <Toolbar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Box pr={1} component="span">
            <Button component={LinkToLogin}>Войти</Button>
          </Box>
          <Button component={LinkToRegistr}>Регистрация</Button>
        </Grid>
      </Grid>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
