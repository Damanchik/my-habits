import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import UseStyles from './TasksContainer.styles';
import SideBar from '../../components/SideBar/SideBar';

// @ts-ignore
const TasksContainer = ({ children }: TemplateProps) => {
  const classes = UseStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <IconButton
        color="inherit"
        edge="end"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Hidden smUp implementation="css">
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.Drawer,
          }}
        >
          <SideBar />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.Drawer,
          }}
        >
          <SideBar />
        </Drawer>
      </Hidden>
      <Grid
        item
        container
        justify="flex-start"
        className={classes.contentField}
      >
        {children}
      </Grid>
      <Link to="/tasks/add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
};

export default TasksContainer;
