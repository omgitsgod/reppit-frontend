import React, { Component } from 'react'
import { Paper, Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DatePicker from 'react-date-picker'
import SimpleTable from './Table'



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
class Calendar extends Component {

  state = {
    date: new Date(),
    workouts:[]
  }

  componentDidMount() {
    const date = this.state.date
    console.log(date)
    console.log(this.props.user.user.id)
    const newDate = `${date.getFullYear()}-${(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }-${date.getDate() > 9 ? date.getDate() : "0"
    + date.getDate()}`
    fetch(`${process.env.REACT_APP_HOST}/api/v1/workouts/${newDate}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${this.props.user.jwt}`
  }
}).then(r => r.json()).then(json => this.setState({
      workouts: json.filter(x => x.user_id === this.props.user.user.id)
    }))
  }
  breakIt = () => {

  }

  onChange = date => {
    const newDate = `${date.getFullYear()}-${(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }-${date.getDate() > 9 ? date.getDate() : "0"
    + date.getDate()}`
    fetch(`${process.env.REACT_APP_HOST}/api/v1/workouts/${newDate}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${this.props.user.jwt}`
  }
}).then(r => r.json()).then(json => this.setState({
      workouts: json,
      date: date
    }))

  }
  render() {
    const { classes } = this.props
    const { date, workouts } = this.state

    return (

      <main className={classes.main}>

      <Paper className={classes.paper}>

      <DatePicker a onChange={this.onChange} value={this.state.date} />
      <Typography onClick={this.breakIt} variant='display1' align='center' gutterBottom>
      Workouts on {(date.getMonth()+1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() +1) }/{date.getDate() > 9 ? date.getDate() : "0"
      + date.getDate()}
      </Typography>
      <Divider />

      {workouts.length > 0 ? <SimpleTable workouts={workouts}/> : <Divider /> }
      </Paper>
      </main>
    )
  }
}
)
