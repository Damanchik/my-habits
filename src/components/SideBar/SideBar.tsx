import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Logo from '../Logo';
import UseStyles from './SideBar.style';

const SideBar = () => {
  const classes = UseStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Задания</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
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
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Input
            name="avatar-upload"
            className={classes.input}
            id="avatar-upload"
            type="file"
          />
          <label htmlFor="avatar-upload">
            <MenuItem onClick={handleClose}>Сменить аватар</MenuItem>
          </label>
          <MenuItem onClick={handleClose}>Выйти из аккаунта</MenuItem>
        </Menu>
        <IconButton onClick={handleClick}>
          <Avatar className={classes.avatar} />
        </IconButton>
        <Typography
          variant="body1"
          align="center"
          className={classes.typography}
        >
          Фёдор
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SideBar;
