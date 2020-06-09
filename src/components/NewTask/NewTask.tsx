import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import TextField from '@material-ui/core/TextField';
import UseStyles from './NewTask.style';

const NewTask = () => {
  const classes = UseStyles();
  const { register, handleSubmit, errors, control } = useForm();
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
                <InputLabel htmlFor="type">Тип цели</InputLabel>
                <Controller
                  as={
                    <Select
                      fullWidth
                      name="type"
                      variant="outlined"
                      onChange={handleChange}
                    />
                  }
                  name="type"
                  control={control}
                  defaultValue="Обычная"
                >
                  <MenuItem value="Обычная" onClick={setClose}>
                    Обычная
                  </MenuItem>
                  <MenuItem value="С прогрессией" onClick={setOpen}>
                    С прогрессией
                  </MenuItem>
                </Controller>
              </Grid>
              <Grid item xs className={classes.grid}>
                <InputLabel htmlFor="task-name">Название цели</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  inputRef={register({
                    required: 'Введите имя вашей цели',
                    minLength: {
                      value: 3,
                      message: 'Минимум 3 символа',
                    },
                  })}
                  error={!!errors.name}
                  helperText={errors.name && errors.name.message}
                />
              </Grid>
              <Grid item xs className={classes.grid}>
                <InputLabel htmlFor="task-description">
                  Описание цели
                </InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="description"
                  inputRef={register({
                    required: 'Напишите описание вашей цели',
                    maxLength: {
                      value: 300,
                      message: 'Максимум 300 символов',
                    },
                  })}
                  error={!!errors.description}
                  helperText={errors.description && errors.description.message}
                />
              </Grid>
              <Grid container className={classes.grid} spacing={1}>
                <Grid item xs={12} sm={6}>
                  <InputLabel htmlFor="quantity">Количество</InputLabel>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="quantity"
                    inputRef={register({
                      pattern: {
                        value: /[0-9]/,
                        message: 'Введите число',
                      },
                    })}
                    error={!!errors.quantity}
                    helperText={errors.quantity && errors.quantity.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel htmlFor="unit">Ед.измерения</InputLabel>
                  <Controller
                    as={<Select fullWidth variant="outlined" />}
                    name="unit"
                    control={control}
                    defaultValue="раз"
                  >
                    <MenuItem value="раз">раз</MenuItem>
                    <MenuItem value="метров">метров</MenuItem>
                    <MenuItem value="минут">минут</MenuItem>
                  </Controller>
                </Grid>
              </Grid>
              {opened && (
                <Grid container className={classes.grid} spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="increment">Шаг</InputLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="increment"
                      inputRef={register({
                        pattern: {
                          value: /[0-9]/,
                          message: 'Введите число',
                        },
                      })}
                      error={!!errors.increment}
                      helperText={errors.increment && errors.increment.message}
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
                          value: /[0-9]/,
                          message: 'Введите число',
                        },
                      })}
                      error={!!errors.speed}
                      helperText={errors.speed && errors.speed.message}
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
