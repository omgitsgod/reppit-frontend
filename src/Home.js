import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Grid, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete, FitnessCenter, PowerSettingsNew } from '@material-ui/icons'


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
class Home extends Component {
  render() {
    const { classes } = this.props
    const date = new Date
    return (

      <Paper className={classes.root}>
      <Typography variant='display2' align='center' gutterBottom>
      Today is {(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }/{date.getDate() > 9 ? date.getDate() : "0"
      + date.getDate()}
      </Typography>
      <Divider />
      <Typography variant='display1' align='center' gutterBottom>
      Start Your Workout
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      View Your Workouts
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      Profile
      </Typography>
      </Paper>

    )
  }
}
)
