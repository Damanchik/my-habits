import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Logo from './components/Logo';

const App = () => (
  <>
    <CssBaseline />
    <AppBar position="static">
      <Container>
        <Logo />
      </Container>
    </AppBar>
    <Container component="main">
      <Typography variant="h3">Fill free and make changes!</Typography>
    </Container>
  </>
);

export default App;
