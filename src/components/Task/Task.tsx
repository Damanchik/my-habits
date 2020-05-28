import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import UseStyles from './Task.styles';

// @ts-ignore
const Task = () => {
  const classes = UseStyles();
  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Box className={classes.box}>agjkh</Box>
        <Grid className={classes.box2}>
          <Typography>Название задания</Typography>
          <Typography>Описание задания</Typography>
        </Grid>
        <Grid item className={classes.grid}>
          <ListItem button>
            <ListItemText>
              <Typography align="center">Задания</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Typography align="center">Задания</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Typography align="center">Задания</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Typography align="center">Задания</Typography>
            </ListItemText>
          </ListItem>
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
