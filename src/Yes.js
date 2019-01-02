import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard'
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
    display: 'home'
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render(){
  return (
    <div>
    <MenuAppBar />
    <Home />
    <Workouts />
    <Profile />
    <Calendar />
    <Router>
    <div>
      <Route exact path="/" component={CreateWorkout} />
      <Route path="/dashboard" component={MenuAppBar} />
      <Route path="/home" component={Home} />
      </div>
  </Router>
    </div>
  );
}
}
