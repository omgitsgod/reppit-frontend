import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete} from '@material-ui/icons'


const styles = theme => console.log(theme) || ({
    root: {
      margin: 20,
      padding: 20,
      maxWidth: 400
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
class CreateWorkout extends Component {
  state = {
    exercises: [],
    exercise: '',
    weight: '',
    reps: '',
    exerciseList: {}
  }

  handleChange = ({ target: { name, value } }) =>


    this.setState({
      [name]: value
    })

  handleThis = (e) => {
    e.preventDefault()
    console.log(this.state.exercises)
    const theList = this.state.exerciseList
    const exer = this.state.exercise.toLowerCase()
    const lbs = this.state.weight
    const reprep = this.state.reps
    const newList = {...theList}

    console.log("LOOK HERE", newList)
    if (!newList[exer]) {
      newList[exer] = []
    }
    newList[exer].push({weight: lbs, reps: reprep})
    console.log(newList)
    this.setState({
      exerciseList: newList
    })
    if (this.state.exercise && this.state.weight && this.state.reps) {
      this.setState(({ exercises, exercise, weight, reps}) => ({
        exercises: [
          ...exercises,
          {
            exercise,
            weight,
            reps,
            id: Date.now()
          }
        ],


      }))
    }
    console.log(this.state.exerciseList)
  }
  handleDelete = (id) => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }

  handleNext = (e) => {
    e.preventDefault()
    this.setState(({ exercises, exercise, weight, reps }) => ({

        exercise: '',
        weight: '',
        reps:''
      }))

  }

  createWorkout = () => {
    fetch(`${process.env.REACT_APP_HOST}/api/v1/workouts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.props.user.jwt}`

        },

        body: JSON.stringify({workout: this.state.exerciseList, user_id: this.props.user.user.id}),
    })

    this.setState(({ exercises, exercise, weight, reps }) => ({
        exercises: [],
        exercise: '',
        weight: '',
        reps:'',
        exerciseList: {}
      }))
  }


  render() {
    const { exercise, exercises, weight, reps } = this.state
    const { classes } = this.props

    return (
      <main className={classes.main}>

      <Paper className={classes.paper}>
      <Typography variant='display1' align='center' gutterBottom>
        Session
      </Typography>
      <Divider />
      <form onSubmit={this.handleNext} autoComplete="off">
        <TextField
          name='exercise'
          label='Exercise'
          value={exercise}
          onChange={this.handleChange}
          margin='normal'
          fullWidth='true'
        />
        <TextField
          name='weight'
          type="number"
          label='Weight'
          value={weight}
          onChange={this.handleChange}
          margin='normal'
        />

        <TextField
          name={'reps'}
          type="number"
          label='Reps'
          value={this.state.reps}
          onChange={this.handleChange}
          margin='normal' />

          <br/>
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleThis}
        >
          Add To Workout
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="raised"
        >
          Next Exercise
        </Button>
      </form>
      <List>
      <ListItem>
        <ListItemText primary="Exercise"/>
        <ListItemText primary="Weight"/>
        <ListItemText primary="Reps"/>
      </ListItem>
        {exercises.map(({ id, exercise, weight, reps }) =>
          <ListItem key={id}>
            <ListItemText primary={exercise} />
            <ListItemText primary={weight} />
            <ListItemText primary={reps} />
            <ListItemSecondaryAction>
              <IconButton
                color='primary'
                onClick={() => this.handleDelete(id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

      )}
      </List>
      {this.state.exercises.length ?
        <div>
      <Button
        type="submit"
        color="primary"
        variant="raised"
        onClick={this.createWorkout}
      >
        Save Workout
      </Button>
      <Button
        type="submit"
        color="primary"
        variant="raised"
        onClick={this.createWorkout}
      >
        Save To Routines
      </Button>
      </div>
      : ''
    }
      </Paper>
      </main>
    )
  }
}
)
