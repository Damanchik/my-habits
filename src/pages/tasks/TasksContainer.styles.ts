import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 230;

export default makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    Drawer: {
      width: drawerWidth,
    },
    contentField: {
      padding: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    fab: {
      position: 'fixed',
      [theme.breakpoints.up('sm')]: {
        bottom: theme.spacing(4),
        right: theme.spacing(4),
      },
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);
