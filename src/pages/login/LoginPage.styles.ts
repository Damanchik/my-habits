import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    form: {
      flexGrow: 1,
      height: 'calc(100% - 64px)',
    },
    grid: {
      height: '100%',
    },
    textField: {
      marginTop: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
    box: {
      border: '1px solid #e5e5e5',
      borderRadius: 5,
      padding: theme.spacing(4),
    },
  })
);
