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
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.id}
                  style={
                    row.isDone === 'Выполнено'
                      ? { background: 'green' }
                      : row.isDone === 'Перевыполнено'
                      ? { background: 'blue' }
                      : row.isDone === 'Частично'
                      ? { background: 'orange' }
                      : { background: 'red' }
                  }
                >
                  <TableCell>
                    {row.type === 'С прогрессией' ? (
                      <ShowChartIcon />
                    ) : (
                      <AccessAlarmIcon />
                    )}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default SuccessTable;
