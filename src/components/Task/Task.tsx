import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import UseStyles from './Task.style';
import TaskButton from '../TaskButtons/TaskButton';

// @ts-ignore
const Task = ({ description, name, imgUrl }) => {
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
              alignItems="flex-start"
              xs={12}
              sm={12}
              md={2}
            >
              <img src={imgUrl} alt="картинка" className={classes.img} />
            </Grid>
            <Grid item container direction="column" xs={12} sm={12} md={6}>
              <Typography gutterBottom variant="h6" align="center">
                {name}
              </Typography>
              <Typography
                id="description"
                variant="body2"
                align="center"
                className={classes.typographyDescription}
              >
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TaskButton />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Task;
