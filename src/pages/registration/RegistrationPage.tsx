import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
      style={{ background: 'none', height: 'calc(100% - 64px)' }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          background: 'none',
          width: 'auto',
          height: '55vh',
          minHeight: '550px',
        }}
      >
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          style={{ height: '100%', width: '100%' }}
        >
          <Typography align="center" variant="h4">
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
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
          <TextField
            name="secondName"
            variant="outlined"
            label="Ваша фамилия"
            inputRef={register}
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
                message: 'Пароль должен включать 5 символов',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <TextField
            name="passwordRepeat"
            variant="outlined"
            type="password"
            label="Повторите пароль"
            inputRef={register({
              validate: value =>
                value === password.current || 'Пароль не совпадает',
            })}
          />
          {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}
          <Button type="submit" variant="outlined">
            Создать аккаунт
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default RegistrationPage;
