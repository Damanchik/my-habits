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
      <Grid item xs={7} sm={4} lg={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box height={500}>
            <Grid
              container
              direction="column"
              justify="space-around"
              className={classes.grid}
            >
              <Typography align="center" variant="h4" color="primary">
                Регистрация
              </Typography>
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
                error={!!errors.firstName}
                helperText={errors.firstName && errors.firstName.message}
                fullWidth
              />
              <TextField
                name="email"
                variant="outlined"
                label="Ваш email"
                inputRef={register({
                  required: 'Введите ваше email',
                })}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                fullWidth
              />
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
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
                fullWidth
              />
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
                error={!!errors.passwordRepeat}
                helperText={
                  errors.passwordRepeat && errors.passwordRepeat.message
                }
                fullWidth
              />

              <Button
                fullWidth
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
              >
                Создать аккаунт
              </Button>
            </Grid>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
