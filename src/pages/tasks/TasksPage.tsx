import React from 'react';
import Typography from '@material-ui/core/Typography';
import data from './stubs';
import Task from '../../components/Task/Task';
import Template from '../../components/Template';
import UseStyles from './TasksPage.style';
import FabNewTask from '../../components/FabNewTask/FabNewTask';

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
        <Typography
          display="initial"
          variant="h4"
          className={classes.typography}
        >
          Задания
        </Typography>
        {yourTasks}
      </Template>
      <FabNewTask />
    </>
  );
};

export default TasksPage;
