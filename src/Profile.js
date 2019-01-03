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
class Profile extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    this.setState({
      user: this.props.user.user
    })

  }
  render() {
    const { classes } = this.props
    console.log(this.state.user)
    return (

      <Paper className={classes.root}>
      <Typography variant='display1' align='center' gutterBottom>
      {this.state.user.username}
      </Typography>
      <Divider />
      <Typography variant='display1' align='center' gutterBottom>
      {this.state.user.name}
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      {this.state.user.age}
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      {this.state.user.sex}
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      {this.state.user.height / 12} ft
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      {this.state.user.weight} lbs
      </Typography>

      </Paper>

    )
  }
}
)
