import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Grid, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete, FitnessCenter, PowerSettingsNew } from '@material-ui/icons'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


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
class Home extends Component {
  render() {
    const { classes } = this.props
    const date = new Date
    return (
      <main className={classes.main}>
      <Paper className={classes.paper}>
      <Typography variant='display2' align='center' gutterBottom>
      Today is {(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }/{date.getDate() > 9 ? date.getDate() : "0"
      + date.getDate()}
      </Typography>
      <Typography variant='display2' align='center' gutterBottom>
      Welcome back, {this.props.user.user.name ? this.props.user.user.name : this.props.user.user.username}
      </Typography>
      <Divider />
      <br />
      <Button
      color="primary"
      variant="raised">
    <Link to='/createworkout' style={{ textDecoration: 'none', color: 'white' }}>  Start Workout </Link>
      </Button >
      <br />
      <Button
      color="primary"
      variant="raised">
      <Link to="/calendar" style={{ textDecoration: 'none', color: 'white' }}> View Workouts </Link>
      </Button>
      <br />
      <Button
      color="primary"
      variant="raised"
      onClick={this.props.handleUser}>
      <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}> Logout </Link>
      </Button>

      </Paper>
      </main>
    )
  }
}
)
