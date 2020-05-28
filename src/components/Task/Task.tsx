import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import UseStyles from './Task.styles';
import runPic from './run.jpg';

// @ts-ignore
const Task = () => {
  const classes = UseStyles();
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        lg={5}
        className={classes.paperContainer}
      >
        <Paper className={classes.paper}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Box className={classes.image}>
                <img className={classes.img} src={runPic} alt="Картинка" />
              </Box>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5">
                    Название занятия
                  </Typography>
                  <Typography variant="body1">Описание занятия</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Button fullWidth>Выполнено</Button>
              <Button fullWidth>Частично</Button>
              <Button fullWidth>Перевыполнено</Button>
              <Button fullWidth>Не выполнено</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Task;
