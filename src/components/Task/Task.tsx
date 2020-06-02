import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import UseStyles from './Task.styles';
import TaskButton from '../TaskButton/TaskButtons';

// @ts-ignore
const Task = ({ description, name }) => {
  const classes = UseStyles();
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  const handleText = () => {
    if (!checked) {
      return <Typography variant="caption">Показать</Typography>;
    }
    return <Typography variant="caption">Скрыть</Typography>;
  };

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
              <img
                src="http://placekitten.com/600/900"
                alt="картинка"
                className={classes.img}
              />
            </Grid>
            <Grid item container direction="column" xs={12} sm={12} md={6}>
              <Typography gutterBottom variant="h6" align="center">
                {name}
              </Typography>
              <Collapse in={checked} collapsedHeight={75}>
                <Typography
                  id="description"
                  variant="body1"
                  align="center"
                  className={classes.typographyDescription}
                >
                  {description}
                </Typography>
              </Collapse>
              <Grid container justify="center">
                <FormControlLabel
                  style={
                    description.length > 87
                      ? { display: 'block' }
                      : { display: 'none' }
                  }
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                    />
                  }
                  labelPlacement="top"
                  label={
                    <Typography variant="caption">
                      {handleText()} описание
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TaskButton />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Task;
