import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
});

let id = 0;
function createData(exercise, sets) {
  id += 1;
  return { id, exercise, sets};
}





function SimpleTable(props) {
  const { classes } = props;

const workout = props.workouts.map(x => { return Object.keys(x.workout).map(y => [y, x.workout[y].length] )})
const rowsy = workout.map(x => createData(x[0][0], x[0][1]))
  props.workouts.map(x => {
    return Object.keys(x.workout).map(y => createData(y, x.workout[y].length) ) })
    const rows = [
      createData('Bicep/Tricep', 6, 18),
      createData('Chest/Back', 6, 18),
      createData('Shoulders/Traps', 6, 9),
      createData('Legs', 6, 18),
    ]
    console.log("lookie", props.workouts)



  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Exercise </TableCell>
            <TableCell align="right">Sets</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rowsy.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.exercise}
                </TableCell>
                <TableCell align="right">{row.sets}</TableCell>


              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable)
