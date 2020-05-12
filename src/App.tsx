import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import AppBar from './components/AppBar';
import theme from './components/theme';
import Router from './router';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router navbar={AppBar} />
  </ThemeProvider>
);

export default App;
