import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    moodBadIcon: {
      color: 'orange',
    },
    partiallyDone: {
      marginRight: 17,
    },
    doneOutlineIcon: {
      marginLeft: 44,
      color: 'green',
    },
    errorIcon: {
      marginLeft: 27,
    },
  })
);