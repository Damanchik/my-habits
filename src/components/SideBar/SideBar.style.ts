import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    Avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    Typography: {
      background: 'none',
      marginTop: theme.spacing(2),
    },
    gridSideBar: {
      height: '100%',
      background: 'none',
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
