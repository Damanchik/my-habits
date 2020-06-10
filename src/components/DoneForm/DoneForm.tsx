import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const DoneForm = ({ pass, description, type, min, max, marks, children }) => {
  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <DialogTitle>Выполнение цели</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        <Slider
          valueLabelDisplay="auto"
          defaultValue={100}
          step={1}
          marks={marks}
          min={min}
          max={max}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => console.log({ pass, value, type })}>
          Подтвердить
        </Button>
        {children}
      </DialogActions>
    </>
  );
};

export default DoneForm;
