import Grid from '@material-ui/core/Grid';
import Logo from '../Logo';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import UseStyles from './SideBar.style';

const SideBar = () => {
  const classes = UseStyles();

  return (
    <Grid container className={classes.gridSideBar} direction="column">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.gridLogo}
      >
        <Logo />
      </Grid>
      <Divider />
      <List className={classes.list}>
        <ListItem button>
          <ListItemText>
            <Typography>Задания</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Typography>Успехи</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        wrap="wrap"
        className={classes.gridAvatar}
      >
        <Avatar className={classes.Avatar} src="/static/images/avatar/1.jpg" />
        <Typography
          variant="body1"
          align="center"
          className={classes.Typography}
        >
          Фёдор
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SideBar;
