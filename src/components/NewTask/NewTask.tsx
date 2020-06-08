import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import TextField from '@material-ui/core/TextField';
import UseStyles from './NewTask.style';

const NewTask = () => {
  const classes = UseStyles();
  const { register, handleSubmit, errors } = useForm();
  const [type, setType] = useState('');
  const [opened, setOpened] = useState(false);
  const setOpen = () => setOpened(true);
  const setClose = () => setOpened(false);
  const onSubmit = data => console.log(data);
  const handleChange = event => {
    setType(event.target.value);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        item
        xs={12}
        sm={10}
        md={8}
        className={classes.outerGrid}
      >
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" justify="flex-start">
              <Typography variant="h5" className={classes.typography}>
                Задай себе новую цель!
              </Typography>
              <Grid item xs className={classes.grid}>
                <Box>
                  <InputLabel htmlFor="type">Тип цели</InputLabel>
                  <Select
                    fullWidth
                    name="type"
                    variant="outlined"
                    inputRef={register}
                    onChange={handleChange}
                    defaultValue="Обычная"
                  >
                    <MenuItem value="Обычная" onClick={setClose}>
                      Обычная
                    </MenuItem>
                    <MenuItem value="С прогрессией" onClick={setOpen}>
                      С прогрессией
                    </MenuItem>
                  </Select>
                </Box>
              </Grid>
              <Grid item xs className={classes.grid}>
                <Box>
                  <InputLabel htmlFor="task-name">Название цели</InputLabel>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="name"
                    inputRef={register}
                  />
                </Box>
              </Grid>
              <Grid container className={classes.grid} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputLabel htmlFor="quantity">Количество</InputLabel>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="quantity"
                    inputRef={register({
                      pattern: {
                        value: /[A-Za-z0-9]/,
                        message: 'Введите число',
                      },
                    })}
                    error={!!errors.quantity}
                    helperText={errors.quantity && errors.quantity.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel htmlFor="unit">Ед.измерения</InputLabel>
                  <Select
                    fullWidth
                    variant="outlined"
                    defaultValue="раз"
                    name="unit"
                  >
                    <MenuItem value="раз">раз</MenuItem>
                    <MenuItem value="метров">метров</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              {opened && (
                <Grid container className={classes.grid} spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="step">Шаг</InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="step"
                      inputRef={register({
                        pattern: {
                          value: /[A-Za-z0-9]/,
                          message: 'Введите число',
                        },
                      })}
                      error={!!errors.quantity}
                      helperText={errors.quantity && errors.quantity.message}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="speed">Скорость</InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="speed"
                      inputRef={register({
                        pattern: {
                          value: /[A-Za-z0-9]/,
                          message: 'Введите число',
                        },
                      })}
                      error={!!errors.quantity}
                      helperText={errors.quantity && errors.quantity.message}
                    />
                  </Grid>
                </Grid>
              )}
              <Button
                size="large"
                variant="outlined"
                color="primary"
                endIcon={<DoneAllIcon />}
                type="submit"
              >
                Создать
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default NewTask;
