import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TaskButton from '../TaskButtons/TaskButton';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ErrorIcon from '@material-ui/icons/Error';
import UseStyles from './Task.style';

/*
interface TaskProps {
  id: number;
  name: string;
  description: any;
  imgUrl: any;
}

 */

const Task = ({ pass, name, description, imgUrl }) => {
  const classes = UseStyles();

  return (
    <>
      <Grid item xs={12} className={classes.paperContainer}>
        <Paper className={classes.paper}>
          <Grid container justify="flex-start" spacing={1}>
            <Grid
              item
              container
              justify="center"
              alignItems="flex-start"
              xs={12}
              sm={12}
              md={2}
            >
              <img src={imgUrl} alt="картинка" className={classes.img} />
            </Grid>
            <Grid item container direction="column" xs={12} sm={12} md={6}>
              <Typography gutterBottom variant="h6" align="center">
                {name}
              </Typography>
              <Typography
                id="description"
                variant="body2"
                align="center"
                className={classes.typographyDescription}
              >
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
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
              >
                <Typography className={classes.partiallyDone}>
                  Частично
                </Typography>
              </Button>
              <Button
                type="submit"
                fullWidth
                startIcon={
                  <DoneOutlineIcon className={classes.doneOutlineIcon} />
                }
              >
                <Typography>Перевыполнено</Typography>
              </Button>
              <Button
                type="submit"
                fullWidth
                startIcon={
                  <ErrorIcon className={classes.errorIcon} color="error" />
                }
                onClick={() => console.log({ pass, type: 'Fail' })}
              >
                <Typography>Не выполнено</Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Task;
