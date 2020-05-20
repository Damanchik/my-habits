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
          <Typography align="center" variant="h4" color="primary">
            Регистрация
          </Typography>
          <Box mt={5} height={85}>
            <TextField
              fullWidth
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
            />
            {errors.firstName && (
              <Typography color="error" variant="body2">
                {errors.firstName.message}
              </Typography>
            )}
          </Box>
          <Box mt={2} height={85}>
            <TextField
              fullWidth
              name="email"
              variant="outlined"
              label="Ваш email"
              inputRef={register({
                required: 'Введите ваше email',
              })}
            />
            {errors.email && (
              <Typography color="error" variant="body2">
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <Box mt={2} height={70}>
            <TextField
              fullWidth
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
            />
            {errors.password && (
              <Typography color="error" variant="body2">
                {errors.password.message}
              </Typography>
            )}
          </Box>
          <Box mt={2} mb={2} height={85}>
            <TextField
              fullWidth
              name="passwordRepeat"
              variant="outlined"
              type="password"
              label="Повторите пароль"
              color="primary"
              inputRef={register({
                validate: value =>
                  value === password.current || 'Пароль не совпадает',
              })}
            />
            {errors.passwordRepeat && (
              <Typography color="error" variant="body2">
                {errors.passwordRepeat.message}
              </Typography>
            )}
          </Box>
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            color="primary"
            size="large"
          >
            Создать аккаунт
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
