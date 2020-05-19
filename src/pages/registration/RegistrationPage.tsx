import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useStyles from './RegistrationPage.styles';

const RegistrationPage = () => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit, register, errors, watch } = methods;
  const onSubmit = (data: any) => console.log(data);
  const password = useRef({});
  password.current = watch('password', '');

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.registrationBackground}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formStyle}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className={classes.gridStyle}
        >
          <Typography align="center" variant="h4" color="primary">
            Регистрация
          </Typography>
          <Box className={classes.boxStyle}>
            <TextField
              name="firstName"
              variant="outlined"
              label="Ваше имя"
              inputRef={register({
                required: 'Введите ваше имя',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
              })}
              className={classes.textFieldStyle}
            />
            {errors.firstName && (
              <span className={classes.errorStyle}>
                {errors.firstName.message}
              </span>
            )}
          </Box>
          <Box className={classes.boxStyle}>
            <TextField
              name="email"
              variant="outlined"
              label="Ваш email"
              inputRef={register({
                required: 'Введите ваше email',
              })}
              className={classes.textFieldStyle}
            />
            {errors.email && (
              <span className={classes.errorStyle}>{errors.email.message}</span>
            )}
          </Box>
          <Box className={classes.boxStyle}>
            <TextField
              name="password"
              variant="outlined"
              label="Придумайте пароль"
              type="password"
              inputRef={register({
                required: 'Вам нужно придумать пароль',
                minLength: {
                  value: 5,
                  message: 'Пароль должен включать не менее 5 символов',
                },
              })}
              className={classes.textFieldStyle}
            />
            {errors.password && (
              <span className={classes.errorStyle}>
                {errors.password.message}
              </span>
            )}
          </Box>
          <Box className={classes.boxStyle}>
            <TextField
              name="passwordRepeat"
              variant="outlined"
              type="password"
              label="Повторите пароль"
              color="primary"
              inputRef={register({
                validate: value =>
                  value === password.current || 'Пароль не совпадает',
              })}
              className={classes.textFieldStyle}
            />
            {errors.passwordRepeat && (
              <span className={classes.errorStyle}>
                {errors.passwordRepeat.message}
              </span>
            )}
          </Box>
          <Button type="submit" variant="outlined" color="primary" size="large">
            Создать аккаунт
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default RegistrationPage;
