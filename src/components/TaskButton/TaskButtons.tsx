import React from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import UseStyles from './TaskButton.style';

const TaskButton = () => {
  const classes = UseStyles();
  return (
    <>
      <Button fullWidth startIcon={<CheckIcon color="primary" />}>
        <Typography>Выполнено</Typography>
      </Button>
      <Button
        fullWidth
        startIcon={<MoodBadIcon className={classes.moodBadIcon} />}
      >
        <Typography className={classes.partiallyDone}>Частично</Typography>
      </Button>
      <Button
        fullWidth
        startIcon={<DoneOutlineIcon className={classes.doneOutlineIcon} />}
      >
        <Typography>Перевыполнено</Typography>
      </Button>
      <Button
        fullWidth
        startIcon={<ErrorIcon className={classes.ErrorIcon} color="error" />}
      >
        <Typography>Не выполнено</Typography>
      </Button>
    </>
  );
};

export default TaskButton;
