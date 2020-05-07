import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import AppBar from './components/AppBar';
import theme from './components/theme';
import HomePage from './pages/home';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar />
    <HomePage />
  </ThemeProvider>
);

export default App;
