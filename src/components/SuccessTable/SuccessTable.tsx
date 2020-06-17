import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import UseStyles from './SuccessTable.style';
import rows from './stubs';

const successList = rows.map(row => (
  <TableRow
    key={row.id}
    style={
      row.isDone === 'Выполнено'
        ? { background: 'rgb(0, 224, 0)' }
        : row.isDone === 'Перевыполнено'
        ? { background: 'rgb(96, 255, 255)' }
        : row.isDone === 'Частично'
        ? { background: 'rgb(255, 192, 0)' }
        : { background: 'red' }
    }
  >
    <TableCell align="center">
      {row.type === 'С прогрессией' ? <ShowChartIcon /> : <AccessAlarmIcon />}
    </TableCell>
    <TableCell>{row.name}</TableCell>
    <TableCell>{row.date}</TableCell>
  </TableRow>
));

const SuccessTable = () => {
  const classes = UseStyles();

  return (
    <>
      <Grid item xs={12} sm={11} className={classes.outerGrid}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Тип</TableCell>
                <TableCell>Название</TableCell>
                <TableCell>Дата</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{successList}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default SuccessTable;
