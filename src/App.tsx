import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Button, ThemeProvider, Toolbar } from '@material-ui/core';
import Logo from './components/Logo';
import BackgroundPic from './assets/home_page_bg.jpg';
import theme from './components/theme';

const ContainerStyles = {
  background: `url(${BackgroundPic}) 3% 10% no-repeat`,
  backgroundSize: 'cover',
  width: '100vw',
  height: '94vh',
};

const headerStyle = {};

const buttonStyle = {
  minWidth: '120px',
  margin: '0 10px',
};

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary" style={headerStyle}>
        <Toolbar>
          <Container>
            <Logo />
          </Container>
          <Button color="secondary" variant="text">
            Войти
          </Button>
          <Button color="secondary" variant="text" style={buttonStyle}>
            Регистрация
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xl" style={ContainerStyles}>
        <Typography variant="h3" />
      </Container>
    </ThemeProvider>
  </>
);

export default App;
