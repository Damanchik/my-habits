import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import Dialog from '@material-ui/core/Dialog';
import UseStyles from './TaskButton.style';
import DoneForm from '../DoneForm/DoneForm';
import PartiallyMarksArray from '../DoneForm/PartiallyMarksArray';
import OverDoneMarksArray from '../DoneForm/OverDoneMarksArray';

// @ts-ignore
const TaskButton = ({ pass }) => {
  const classes = UseStyles();

  const [openPartially, setOpenPartially] = useState(false);
  const handleClickOpenPartially = () => {
    setOpenPartially(true);
  };
  const handleClosePartially = () => {
    setOpenPartially(false);
  };

  const [openOverDone, setOpenOverDone] = useState(false);
  const handleClickOpenOverDone = () => {
    setOpenOverDone(true);
  };
  const handleCloseOverDone = () => {
    setOpenOverDone(false);
  };

  return (
    <>
      <Button
        type="submit"
        fullWidth
        startIcon={<CheckIcon color="primary" />}
        onClick={() => console.log({ pass, type: 'Done' })}
      >
        <Typography>Выполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        startIcon={<MoodBadIcon className={classes.moodBadIcon} />}
        onClick={handleClickOpenPartially}
      >
        <Typography className={classes.partiallyDone}>Частично</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        startIcon={<DoneOutlineIcon className={classes.doneOutlineIcon} />}
        onClick={handleClickOpenOverDone}
      >
        <Typography>Перевыполнено</Typography>
      </Button>
      <Button
        type="submit"
        fullWidth
        startIcon={<ErrorIcon className={classes.errorIcon} color="error" />}
        onClick={() => console.log({ pass, type: 'Fail' })}
      >
        <Typography>Не выполнено</Typography>
      </Button>
      <Dialog open={openPartially} onClose={handleClosePartially}>
        <DoneForm
          pass={pass}
          description="Отметьте на сколько процентов ваша цель была выполнена"
          type="partially"
          min={1}
          max={99}
          marks={PartiallyMarksArray}
        >
          <Button
            onClick={handleClosePartially}
            /*
          Эту кнопку можно вставить, как кнопку Button с onClick и всё будет работать чётко, а можно вставить
          Button как children напрямую в компонент и тоже будет работать чётко. Как лучше? И почему?
           */
          >
            Закрыть
          </Button>
        </DoneForm>
      </Dialog>
      <Dialog open={openOverDone} onClose={handleCloseOverDone}>
        <DoneForm
          pass={pass}
          description="Отметьте на сколько процентов ваша цель была перевыполнена"
          type="overDone"
          min={101}
          max={200}
          marks={OverDoneMarksArray}
        >
          <Button onClick={handleCloseOverDone}>Закрыть</Button>
        </DoneForm>
      </Dialog>
    </>
  );
};

export default TaskButton;
