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
import Typography from '@material-ui/core/Typography';
import UseStyles from './SuccessTable.style';
import rows from './stubs';

const successList = rows.map(row => (
  <TableRow
    selected
    key={row.id}
    style={
      row.isDone === 'Выполнено'
        ? { background: 'rgb(24, 184, 83)' }
        : row.isDone === 'Перевыполнено'
        ? { background: 'rgb(96, 255, 255)' }
        : row.isDone === 'Частично'
        ? { background: 'rgb(255, 166, 42)' }
        : { background: 'red' }
    }
  >
    <TableCell align="center">
      {row.type === 'С прогрессией' ? <ShowChartIcon /> : <AccessAlarmIcon />}
    </TableCell>
    <TableCell>
      <Typography variant="h6">{row.name}</Typography>
    </TableCell>
    <TableCell>
      <Typography variant="h6">{row.date}</Typography>
    </TableCell>
  </TableRow>
));

const SuccessTable = () => {
  const classes = UseStyles();

  return (
    <>
      <Grid item xs={11} className={classes.outerGrid}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Тип</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Название</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Дата</Typography>
                </TableCell>
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
