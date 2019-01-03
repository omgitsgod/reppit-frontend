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
    }
})

export default withStyles(styles) (
class Splash extends Component {
  render() {
    const { classes } = this.props
    const date = new Date
    return (

      <Paper className={classes.root}>
    
      <Divider />
      <Typography variant='display2' align='center' gutterBottom>
      Reppit
      </Typography>

      <Paper>
      <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
      <Button
        color="primary"
        variant="raised">
        Sign Up
        </Button>
        </Link>
        <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>
        <Button
          color="primary"
          variant="raised">
          Sign In
          </Button>
          </Link>
          </Paper>
      </Paper>

    )
  }
}
)
