import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import UseStyles from './Task.styles';
import runPic from './Arrow.jpg';

// @ts-ignore
const Task = () => {
  const classes = UseStyles();
  return (
    <>
      <Grid item xs={12} className={classes.paperContainer}>
        <Paper className={classes.paper}>
          <Grid container justify="flex-start" spacing={1}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              sm={12}
              md={2}
            >
              <img src={runPic} alt="картинка" className={classes.img} />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              xs={12}
              sm={12}
              md={6}
            >
              <Typography gutterBottom variant="h6" align="center">
                Прогулка по улице
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </Grid>
            <Grid container item xs={12} sm={12} md={4}>
              <Button fullWidth startIcon={<CheckIcon color="primary" />}>
                <Typography>Выполнено</Typography>
              </Button>
              <Button
                fullWidth
                startIcon={<MoodBadIcon className={classes.moodBadIcon} />}
              >
                <Typography className={classes.partiallyDone}>
                  Частично
                </Typography>
              </Button>
              <Button
                fullWidth
                startIcon={
                  <DoneOutlineIcon className={classes.doneOutlineIcon} />
                }
              >
                <Typography>Перевыполнено</Typography>
              </Button>
              <Button
                fullWidth
                startIcon={
                  <ErrorIcon className={classes.ErrorIcon} color="error" />
                }
              >
                <Typography>Не выполнено</Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Task;
