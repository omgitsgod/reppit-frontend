import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Grid, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete, FitnessCenter, PowerSettingsNew } from '@material-ui/icons'
import DatePicker from 'react-date-picker'



const styles = theme => console.log(theme) || ({
    root: {
      margin: 20,
      padding: 20,
      maxWidth: 400,
      alignItems: 'center',
      minHeight: 400,

    },
    form: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-evenly'
    }
})

export default withStyles(styles) (
class Calendar extends Component {

  state = {
    date: new Date(),
    workouts:[]
  }

  componentDidMount() {
    const date = this.state.date
    console.log(date)
    const newDate = `${date.getFullYear()}-${(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }-${date.getDate() > 9 ? date.getDate() : "0"
    + date.getDate()}`
    fetch(`http://localhost:3001/api/v1/workouts/${newDate}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.oFQeWUjCQx5X2vxlAH_bzAKijAkSbiS2hW9-EQS883o`
  }
}).then(r => r.json()).then(json => this.setState({
      workouts: json
    }))
  }

  onChange = date => {
    const newDate = `${date.getFullYear()}-${(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }-${date.getDate() > 9 ? date.getDate() : "0"
    + date.getDate()}`
    fetch(`http://localhost:3001/api/v1/workouts/${newDate}`).then(r => r.json()).then(json => this.setState({
      workouts: json,
      date: date
    }))

  }
  render() {
    const { classes } = this.props
    const { date, workouts } = this.state
    const newDate = `${date.getFullYear()}-${(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }-${date.getDate() > 9 ? date.getDate() : "0"
    + date.getDate()} EST`
    console.log("YO", this.state.workouts)
    const workout = workouts.map(x => { return Object.keys(x.workout).map(y => <Typography variant='display1' align='center' gutterBottom> {y} - {x.workout[y].length} sets </Typography>)})
    return (

      <Paper className={classes.root} >

      <DatePicker a onChange={this.onChange} value={this.state.date} />
      <Typography variant='display1' align='center' gutterBottom>
      Workouts on {(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }/{date.getDate() > 9 ? date.getDate() : "0"
      + date.getDate()}
      </Typography>
      <Divider />
      {workout}

      </Paper>

    )
  }
}
)
