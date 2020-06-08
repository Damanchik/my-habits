import React from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import { useForm } from 'react-hook-form';
import UseStyles from './TaskButton.style';

const TaskButton = () => {
  const classes = UseStyles();
  const { handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          type="submit"
          value="дратути"
          fullWidth
          startIcon={<CheckIcon color="primary" />}
        >
          <Typography>Выполнено</Typography>
        </Button>
        <Button
          type="submit"
          value="дратути"
          fullWidth
          startIcon={<MoodBadIcon className={classes.moodBadIcon} />}
        >
          <Typography className={classes.partiallyDone}>Частично</Typography>
        </Button>
        <Button
          type="submit"
          fullWidth
          startIcon={<DoneOutlineIcon className={classes.doneOutlineIcon} />}
        >
          <Typography>Перевыполнено</Typography>
        </Button>
        <Button
          type="submit"
          fullWidth
          startIcon={<ErrorIcon className={classes.errorIcon} color="error" />}
        >
          <Typography>Не выполнено</Typography>
        </Button>
      </form>
    </>
  );
};

export default TaskButton;
