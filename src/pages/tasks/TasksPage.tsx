import React from 'react';
import TasksContainer from './TasksContainer';
import Task from '../../components/Task/Task';

const TasksPage = () => {
  return (
    <>
      <TasksContainer>
        <Task />
      </TasksContainer>
    </>
  );
};

export default TasksPage;
