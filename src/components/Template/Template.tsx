import React, { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Drawer from '../Drawer';
import Logo from '../Logo';
import TemporaryAppBarAppBar from '../TemporaryAppBar';
import MainMenu from '../MainMenu/MainMenu';
import UseStyles from './Template.style';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const drawerWidth = 240;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = UseStyles();

  return (
    <>
      <TemporaryAppBarAppBar />
      <Drawer>
        <Grid container justify="center">
          <Logo />
        </Grid>
        <Divider />
        <MainMenu />
      </Drawer>
      <main
        style={{
          marginLeft: isXs ? 0 : drawerWidth,
          marginTop: isXs ? theme.spacing(9) : 0,
        }}
      >
        {children}
      </main>
      <Link to="/tasks/add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
};

export default Template;
