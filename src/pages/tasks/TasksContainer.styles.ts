import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 200;

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
  })
);
