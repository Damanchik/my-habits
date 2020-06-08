import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    outerGrid: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(5),
      },
    },
    paper: {
      width: '100%',
      padding: theme.spacing(2),
    },
    typography: {
      marginBottom: theme.spacing(3),
    },
    grid: {
      marginBottom: theme.spacing(4),
    },
  })
);
