import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './RegistrationPage.styles.css';
import Box from '@material-ui/core/Box';

const RegistrationPage = () => {
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
      className="registrationBackground"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          background: 'none',
          width: 'auto',
          height: '60vh',
          minHeight: '550px',
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          style={{ height: '100%', width: '100%' }}
        >
          <Typography align="center" variant="h4" color="primary">
            Регистрация
          </Typography>
          <Box
            component="div"
            style={{
              background: 'none',
              width: '190px',
              height: '70px',
            }}
          >
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
            />
            {errors.firstName && (
              <span style={{ color: 'red' }}>{errors.firstName.message}</span>
            )}
          </Box>
          <Box
            component="div"
            style={{
              background: 'none',
              width: '190px',
              height: '70px',
            }}
          >
            <TextField
              name="email"
              variant="outlined"
              label="Ваш email"
              inputRef={register({
                required: 'Введите ваше email',
              })}
            />
            {errors.email && (
              <span style={{ color: 'red' }}>{errors.email.message}</span>
            )}
          </Box>
          <Box
            component="div"
            style={{
              background: 'none',
              width: '190px',
              height: '70px',
            }}
          >
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
            />
            {errors.password && (
              <span style={{ color: 'red' }}>{errors.password.message}</span>
            )}
          </Box>
          <Box
            component="div"
            style={{
              background: 'none',
              width: '190px',
              height: '70px',
            }}
          >
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
            />
            {errors.passwordRepeat && (
              <span style={{ color: 'red' }}>
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
