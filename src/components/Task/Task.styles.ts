import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    img: {},
    image: {
      width: 128,
      height: 140,
      objectFit: 'contain',
    },
    paper: {
      padding: theme.spacing(2),
    },
    paperContainer: {
      margin: theme.spacing(2),
    },
  })
);
