import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import data from './stubs';
import Task from '../../components/Task/Task';
import Template from '../../components/Template';
import UseStyles from './TasksPage.style';

const yourTasks = data.map(task => (
  <Task
    key={task.id}
    pass={task.pass}
    name={task.name}
    description={task.description}
    imgUrl={task.imgUrl}
  />
));

const TasksPage = () => {
  const classes = UseStyles();
  return (
    <>
      <Template>
        <Typography variant="h4" className={classes.typography}>
          Ваши задания:
        </Typography>
        {yourTasks}
      </Template>
      <Link to="/tasks/add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
};

export default TasksPage;
