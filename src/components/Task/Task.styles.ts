import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    paperContainer: {
      margin: theme.spacing(2),
    },
    moodBadIcon: {
      color: 'yellow',
    },
    partiallyDone: {
      marginRight: 17,
    },
    doneOutlineIcon: {
      marginLeft: 44,
      color: 'green',
    },
    ErrorIcon: {
      marginLeft: 27,
    },
    img: {
      height: '100%',
      objectFit: 'cover',
    },
  })
);
