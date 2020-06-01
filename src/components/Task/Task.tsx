import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import UseStyles from './Task.styles';
import runPic from './Arrow.jpg';

// @ts-ignore
const Task = () => {
  const classes = UseStyles();
  return (
    <>
      <ExpansionPanel square>
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography variant="h6">Прогулка по улице</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container justify="flex-start" alignItems="center" spacing={2}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              sm={2}
            >
              <img src={runPic} alt="картинка" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </Grid>
            <Grid container item xs={12} sm={4}>
              <Button fullWidth startIcon={<CheckIcon />}>
                Выполнено
              </Button>
              <Button fullWidth startIcon={<MoodBadIcon />}>
                Частично
              </Button>
              <Button fullWidth startIcon={<DoneOutlineIcon />}>
                Перевыполнено
              </Button>
              <Button fullWidth startIcon={<ErrorIcon />}>
                Не выполнено
              </Button>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <Grid item xs={12} className={classes.paperContainer}>
        <Paper className={classes.paper}>
          <Grid container justify="flex-start" spacing={1}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              sm={2}
            >
              <img src={runPic} alt="картинка" />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              xs={12}
              sm={6}
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
            <Grid container item xs={12} sm={4}>
              <Button fullWidth startIcon={<CheckIcon />}>
                Выполнено
              </Button>
              <Button fullWidth startIcon={<MoodBadIcon />}>
                Частично
              </Button>
              <Button fullWidth startIcon={<DoneOutlineIcon />}>
                Перевыполнено
              </Button>
              <Button fullWidth startIcon={<ErrorIcon />}>
                Не выполнено
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Task;
