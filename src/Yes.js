import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuAppBar from './Topbar'
import CreateWorkout from './CreateWorkout'
import Grid from '@material-ui/core/Grid';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Profile from './Profile'
import Calendar from './Calendar'
import Workouts from './Workouts'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Splash from './Splash'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    background: '#ff9'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  }
})

export default class Yes extends Component {
  state = {
    display: 'home',
    user: {},
    logged: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleUser = (user) => {
    if (user.user) {
      this.setState({
        user: user,
        logged: true
      })
    } else {
      this.setState({
        user: {},
        logged: false
      })
    }
    console.log("yooo", user)
  }

  render(){
  return (


      <div>

        {this.state.user.user ?
          <div>
          <MenuAppBar handleUser={this.handleUser}/>
       <Route exact path="/" component={Home} />
        <Route path="/workouts" component={Workouts} />
        <Route path="/createworkout" component={CreateWorkout} />
        <Route path="/profile" render={(props)=><Profile {...props} user={this.state.user}/>}/>
        <Route path="/calendar" component={Calendar} />
        <Route path="/signin" component={Home} />
        <Route path="/signup" component={Home}/>
        </div> :
        <div>
          <Route exact path="/" component={Splash} />
          <Route path="/signup" render={(props)=><SignUp {...props} handleUser={this.handleUser}/>}/>
          <Route path="/signin" render={(props)=><SignIn {...props} handleUser={this.handleUser}/>}/>
        </div>
      }
      </div>

  );
}
}
