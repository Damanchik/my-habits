import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import UseStyles from './FabNewTask.style';

const FabNewTask = () => {
  const classes = UseStyles();
  return (
    <Link to="/tasks/add">
      <Fab color="primary" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Link>
  );
};

export default FabNewTask;
