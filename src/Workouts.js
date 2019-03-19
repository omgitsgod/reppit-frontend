import React, { Component } from 'react'
import { Paper, Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import SimpleTable from './Table'


const styles = theme => console.log(theme) || ({
    root: {
      margin: 20,
      padding: 20,
      maxWidth: 400,
      alignItems: 'center',

    },
    form: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-evenly'
    },
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    }
})

export default withStyles(styles) (
class Workouts extends Component {
  render() {
    const { classes } = this.props
    return (

      <main className={classes.main}>

      <Paper className={classes.paper}>
      <Typography variant='display1' align='center' gutterBottom>
      Saved Workouts

      </Typography>
        <Divider />
      <SimpleTable />
      </Paper>
      </main>
    )
  }
}
)
