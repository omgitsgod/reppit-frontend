import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Delete, FitnessCenter, PowerSettingsNew } from '@material-ui/icons'


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
    fetch('http://localhost:3001/api/v1/workouts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },

        body: JSON.stringify({workout: this.state.exerciseList, user_id: 1}),
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
      <Paper className={classes.root}>
      <Typography variant='display1' align='center' gutterBottom>
      <img src="https://img.icons8.com/material/24/000000/barbell.png" />
      <img src="https://img.icons8.com/material/24/000000/trainers.png" />
        <img src="https://img.icons8.com/material/24/000000/dumbbell.png" />
        <img src="https://img.icons8.com/material/26/000000/bench-press.png" />
        <img src="https://img.icons8.com/material/26/000000/bench-over-head.png" />
        <img src="https://img.icons8.com/material/26/000000/pullups.png" />
        <img src="https://img.icons8.com/material/26/000000/prelum.png" />
        <img src="https://img.icons8.com/material/26/000000/squats.png" />
        <img src="https://img.icons8.com/material/26/000000/bench-press-with-dumbbells.png" />
        <img src="https://img.icons8.com/material/26/000000/treadmill.png" />
        <img src="https://img.icons8.com/material/26/000000/exercise.png" />

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
      <Button
        type="submit"
        color="primary"
        variant="raised"
        onClick={this.createWorkout}
      >
        Save Workout
      </Button>
      : ''
    }
      </Paper>
    )
  }
}
)
