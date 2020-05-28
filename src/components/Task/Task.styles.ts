import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      background: 'blue',
    },
    box: {
      background: 'yellow',
      flexGrow: 1,
    },
    box2: {
      background: 'green',
      flexGrow: 3,
      padding: theme.spacing(2),
    },
    grid: {
      flexGrow: 2,
    },
  })
);
