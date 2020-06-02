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
      color: 'orange',
    },
    partiallyDone: {
      marginRight: 17,
    },
    doneOutlineIcon: {
      marginLeft: 44,
      color: 'green',
    },
    img: {
      height: '150px',
      width: '100%',
      objectFit: 'cover',
    },
    typographyDescription: {
      [theme.breakpoints.up('sm')]: {
        textAlign: 'left',
      },
      checkbox: {
        display: 'none',
      },
    },
  })
);
