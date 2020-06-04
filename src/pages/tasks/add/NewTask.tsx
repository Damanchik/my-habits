import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import TasksContainer from '../TasksContainer';
import UseStyles from './NewTask.style';

const NewTask = () => {
  const classes = UseStyles();
  return (
    <>
      <TasksContainer>
        <Grid container item xs={12} sm={10} md={8}>
          <Paper className={classes.paper}>
            <Grid container direction="column" justify="flex-start">
              <Typography variant="h5" className={classes.typography}>
                Задай себе новую цель!
              </Typography>
              <Grid item xs className={classes.grid}>
                <Box>
                  <InputLabel htmlFor="task-type">Тип цели</InputLabel>
                  <Select fullWidth variant="outlined">
                    <MenuItem>Обычная</MenuItem>
                    <MenuItem>С прогрессией</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs className={classes.grid}>
                <Box>
                  <InputLabel htmlFor="task-type">Название цели</InputLabel>
                  <Select fullWidth variant="outlined">
                    <MenuItem>Обычная</MenuItem>
                    <MenuItem>С прогрессией</MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid container className={classes.grid} spacing={2}>
                <Grid item xs={6}>
                  <InputLabel htmlFor="task-type">Метрика</InputLabel>
                  <Select fullWidth variant="outlined">
                    <MenuItem>Обычная</MenuItem>
                    <MenuItem>С прогрессией</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="task-type">Метрика</InputLabel>
                  <Select fullWidth variant="outlined">
                    <MenuItem>Обычная</MenuItem>
                    <MenuItem>С прогрессией</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Button
                size="large"
                variant="outlined"
                color="primary"
                endIcon={<DoneAllIcon />}
              >
                Создать
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </TasksContainer>
    </>
  );
};

export default NewTask;

/*
<Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          sm={10}
          md={8}
          style={{ background: 'red' }}
        >
          <Paper className={classes.paper}>
            <Grid
              container
              justify="flex-start"
              direction="column"
              alignItems="center"
            >
              <Grid item xs={12} style={{ background: 'blue' }}>
                <Typography>Задай себе новую цель!</Typography>
              </Grid>
              <Grid item container style={{ background: 'green' }}>
                <InputLabel htmlFor="task-type">Тип цели</InputLabel>
                <Select autoWidth>
                  <option>Обычная</option>
                  <option>С прогрессией</option>
                </Select>
              </Grid>
              <Grid
                container
                justify="space-around"
                style={{ background: 'yellow' }}
              >
                <Box>
                  <InputLabel htmlFor="task-type">Тип цели</InputLabel>
                  <Select autoWidth>
                    <option>Обычная</option>
                    <option>С прогрессией</option>
                  </Select>
                </Box>
                <Box>
                  <InputLabel htmlFor="task-type">Тип цели</InputLabel>
                  <Select autoWidth>
                    <option>Обычная</option>
                    <option>С прогрессией</option>
                  </Select>
                </Box>
              </Grid>
              <Grid style={{ background: 'pink' }}>
                <Button>Создать</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
 */
