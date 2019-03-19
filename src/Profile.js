import React, { Component } from 'react'
import { Paper, Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


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
    console.log("yeah",this.state.user)
    return (

      <main className={classes.main}>

      <Paper className={classes.paper}>
      <Typography variant='display1' align='center' gutterBottom>
      {this.state.user.username}
      </Typography>
      <Divider/>
      <Divider />
      <Typography variant='display1' align='center' gutterBottom>
      Name: {this.state.user.name}
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      Age: {this.state.user.age}
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      Sex: {this.state.user.sex}
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      Height: {this.state.user.height / 12} ft
      </Typography>
      <Typography variant='display1' align='center' gutterBottom>
      Weight: {this.state.user.weight} lbs
      </Typography>

      </Paper>
      </main>
    )
  }
}
)
