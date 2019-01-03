import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Grid, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete, FitnessCenter, PowerSettingsNew } from '@material-ui/icons'
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
    }
})

export default withStyles(styles) (
class Workouts extends Component {
  render() {
    const { classes } = this.props
    return (

      <Paper className={classes.root}>
      <Typography variant='display1' align='center' gutterBottom>
      Saved Workouts
        
      </Typography>
        <Divider />
      <SimpleTable />
      </Paper>

    )
  }
}
)
