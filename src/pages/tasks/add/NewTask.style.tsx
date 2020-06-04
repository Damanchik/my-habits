import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      height: '100%',
      width: '100%',
    },
    typography: {
      marginBottom: theme.spacing(7),
    },
    grid: {
      marginBottom: theme.spacing(7),
    },
  })
);
