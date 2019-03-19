import React, { Component } from 'react'
import { Paper, Typography, TextField, Button, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


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
    name: '',
    weight: '',
    reps: '',
    exerciseList: {}
  }

  handleChange = ({ target: { name, value } }) =>


    this.setState({
      [name]: value
    })


  handleDelete = (id) => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }

  handleNext = (e) => {
    e.preventDefault()
    this.setState(({ exercises, name, weight, reps }) => ({

        name: '',
        weight: '',
        reps:''
      }))

  }

  createWorkout = () => {
    fetch('http://localhost:3001/api/v1/workouts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.oFQeWUjCQx5X2vxlAH_bzAKijAkSbiS2hW9-EQS883o`

        },

        body: JSON.stringify({workout: this.state.exerciseList, user_id: this.props.user.user.id}),
    })

    this.setState(({ exercises, exercise, weight, reps }) => ({
        exercises: [],
        name: '',
        weight: '',
        reps:'',
        exerciseList: {}
      }))
  }


  render() {
    const { name,  weight} = this.state
    const { classes } = this.props

    return (
      <main className={classes.main}>

      <Paper className={classes.paper}>
      <Typography variant='display1' align='center' gutterBottom>

        Edit Profile
      </Typography>
      <Divider />
      <form onSubmit={this.handleNext} autoComplete="off">
        <TextField
          name='name'
          label='Name'
          value={name}
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
          onClick={console.log}
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

      </Paper>
      </main>
    )
  }
}
)
