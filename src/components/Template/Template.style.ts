import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: '240',
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
    grid: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
);
