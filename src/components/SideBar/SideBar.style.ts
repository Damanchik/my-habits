import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    typography: {
      background: 'none',
      marginTop: theme.spacing(2),
    },
    gridSideBar: {
      height: '100%',
    },
    gridLogo: {
      flexGrow: 1,
    },
    list: {
      flexGrow: 6,
    },
    gridAvatar: {
      flexGrow: 1,
    },
  })
);
